import React, {useState, useCallback, useEffect} from "react";
import {View, Text, TextInput, FlatList, TouchableOpacity} from "react-native";
import filterStyles from "./assets/styles/filterStyles";
import Icon from "react-native-vector-icons/Ionicons";
import * as colors from "../../../global/styles/colors";
import StringHelper from "../../../helpers/StringHelper";
import {ActivityIndicator} from "react-native-paper";

function SearchPicker({
  type,
  selected = [],
  options: allOptions = [],
  onSearch: onSearchParent,
  onSelect = () => {},
  showSelected = false,
}) {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState(allOptions);
  const [selectedOptions, setSelectedOptions] = useState(selected);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOptions(allOptions);
  }, [allOptions]);

  useEffect(() => {
    setSelectedOptions(selected);
  }, [selected]);

  const onSearch = useCallback(
    async s => {
      setInput(s);

      let newOptions;

      if (!s) {
        newOptions = allOptions;
      } else if (onSearchParent) {
        setLoading(true);
        const results = await onSearchParent(s);
        newOptions = results;
      } else {
        newOptions = allOptions.filter(
          o =>
            `${o.value}`.toLowerCase().indexOf(s.toLowerCase()) != -1 ||
            `${o.name}`.toLowerCase().indexOf(s.toLowerCase()) != -1,
        );
      }

      if (s && newOptions.length === 0) newOptions = [null];

      setOptions(newOptions);
      setLoading(false);
    },
    [onSearchParent, allOptions],
  );

  const selectOption = useCallback(
    o => {
      const newSelected = [...selectedOptions, o];
      setSelectedOptions(newSelected);
      onSelect(newSelected);
    },
    [selectedOptions, onSelect],
  );

  const deselectOption = useCallback(
    o => {
      const newSelected = selectedOptions.filter(opt => opt.value !== o.value);
      setSelectedOptions(newSelected);
      onSelect(newSelected);
    },
    [selectedOptions, onSelect],
  );

  const clearAll = useCallback(() => {
    setSelectedOptions([]);
    onSelect([]);
  }, [onSelect]);

  const clearInput = useCallback(() => {
    setInput("");
    setOptions(allOptions);
  }, [allOptions]);

  const isSelected = useCallback(
    o => !!selectedOptions.find(opt => opt.value === o.value),
    [selectedOptions],
  );

  const optionsToDisplay = showSelected ? selectedOptions : options;

  return (
    <View style={filterStyles.row}>
      <Text style={filterStyles.title}>
        Search and select {StringHelper.capitalize(type)}s
      </Text>

      <View style={filterStyles.bigContainer}>
        <View style={filterStyles.inputContainer}>
          <Icon name="ios-search" size={20} color={colors.grey} />

          <TextInput
            style={filterStyles.input}
            placeholder={`Search ${type}`}
            onChangeText={onSearch}
            value={input}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={clearInput}
            style={filterStyles.clearInputBtn}>
            <Icon name="ios-close" size={22} color={colors.darkGrey} />
          </TouchableOpacity>
        </View>

        <View style={filterStyles.actionsContainer}>
          <Text style={filterStyles.selectedOptionsText}>
            {selectedOptions.length} selected
          </Text>
          {selectedOptions.length > 0 && (
            <TouchableOpacity
              style={filterStyles.clearAllBtn}
              activeOpacity={0.6}
              onPress={clearAll}>
              <Text
                style={[
                  filterStyles.selectedOptionsText,
                  {color: colors.white},
                ]}>
                clear all
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {loading && <ActivityIndicator style={filterStyles.loadingIndicator} />}

        {options.length > 0 && !loading && (
          <FlatList
            nestedScrollEnabled={true}
            style={filterStyles.optionList}
            data={optionsToDisplay}
            keyExtractor={i => `${i.value}`}
            initialNumToRender={5}
            extraData={selectedOptions}
            renderItem={({item: o, index: i}) => {
              if (o === null)
                return (
                  <View key="0" style={filterStyles.option}>
                    <Text style={filterStyles.noOptionsText}>No results</Text>
                  </View>
                );

              const selected = isSelected(o);
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[
                    filterStyles.option,
                    selected && filterStyles.selectedOption,
                    i === 0 && filterStyles.firstOption,
                  ]}
                  onPress={() =>
                    selected ? deselectOption(o) : selectOption(o)
                  }>
                  <Text
                    style={[
                      filterStyles.optionText,
                      selected && filterStyles.selectedOptionText,
                    ]}>
                    {o.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}

export default SearchPicker;
