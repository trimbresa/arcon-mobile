import React, {useState, useCallback, useEffect} from "react";
import {View, Modal, Text, TouchableOpacity, ScrollView} from "react-native";
import filterStyles from "./assets/styles/filterStyles";
import Icon from "react-native-vector-icons/Ionicons";
import * as colors from "../../../global/styles/colors";
import SearchPicker from "./SearchPicker";
import FilterService from "../../../services/FilterService";

const Filters = ({
  visible = false,
  showSelected: parentShowSelected = false,
  onRequestClose,
  onApply: parentOnApply = () => {},
  locations: allLocations = [],
  departments: allDepartments = [],
  jobs: allJobs = [],
  filters,
  onChangeShowSelected,
  onClearAll: onParentClearAll,
}) => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showSelected, setShowSelected] = useState(parentShowSelected);

  useEffect(() => {
    const {employees, departments, jobs, locations} = filters;
    setEmployees(employees);
    setLocations(locations);
    setDepartments(departments);
    setJobs(jobs);
  }, [visible, filters]);

  useEffect(() => {
    setShowSelected(parentShowSelected);
  }, [parentShowSelected]);

  const onApply = () => {
    parentOnApply({employees, departments, locations, jobs});
  };

  const changeShowSelected = s => {
    setShowSelected(s);
    onChangeShowSelected(s);
  };

  const onSelectEmployees = async e => {
    setEmployees(e);
  };

  const onSelectDepartments = async d => {
    setDepartments(d);
  };

  const onSelectJobs = async j => {
    setJobs(j);
  };

  const onSelectLocations = async l => {
    setLocations(l);
  };

  const onSearchEmployee = async s => {
    const results = await FilterService.searchUser(s);
    return results.data.map(u => ({value: u.id, name: u.name}));
  };

  const onClearAll = () => {
    setEmployees([]);
    setDepartments([]);
    setLocations([]);
    setJobs([]);
    setShowSelected(false);
    onChangeShowSelected(false);
    onParentClearAll();
  };

  const hasFilters =
    employees.length > 0 ||
    locations.length > 0 ||
    departments.length > 0 ||
    jobs.length > 0;

  return (
    <Modal
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visible}
      animationType="slide"
      animated={true}>
      <View
        activeOpacity={1}
        onPress={() => onRequestClose()}
        style={filterStyles.overlay}>
        <TouchableOpacity
          style={filterStyles.closeArea}
          activeOpacity={1}
          onPress={onRequestClose}
        />

        <View activeOpacity={1} style={filterStyles.container}>
          <View style={filterStyles.topContainer}>
            <Text style={filterStyles.titleText}>Filters</Text>

            {hasFilters && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onClearAll}
                style={filterStyles.clearAllFiltersBtn}>
                <Icon name="md-trash" size={17} color={colors.white} />
                <Text style={filterStyles.clearAllFiltersBtnText}>
                  Clear all filters
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={filterStyles.switchContainer}>
            <TouchableOpacity
              onPress={() => changeShowSelected(false)}
              style={[
                filterStyles.switchItem,
                !showSelected && filterStyles.switchItemSelected,
              ]}>
              <Text
                style={[
                  filterStyles.switchItemText,
                  !showSelected && filterStyles.switchItemSelectedText,
                ]}>
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeShowSelected(true)}
              style={[
                filterStyles.switchItem,
                showSelected && filterStyles.switchItemSelected,
              ]}>
              <Text
                style={[
                  filterStyles.switchItemText,
                  showSelected && filterStyles.switchItemSelectedText,
                ]}>
                Selected
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={filterStyles.list}
            keyboardShouldPersistTaps="handled">
            <SearchPicker
              showSelected={showSelected}
              onSearch={onSearchEmployee}
              options={employees}
              onSelect={onSelectEmployees}
              type="employee"
              selected={employees}
            />

            <SearchPicker
              showSelected={showSelected}
              selected={departments}
              options={allDepartments}
              onSelect={onSelectDepartments}
              type="department"
            />

            <SearchPicker
              showSelected={showSelected}
              selected={locations}
              options={allLocations}
              onSelect={onSelectLocations}
              type="location"
            />

            <SearchPicker
              showSelected={showSelected}
              selected={jobs}
              options={allJobs}
              onSelect={onSelectJobs}
              type="job"
            />
          </ScrollView>

          <View style={filterStyles.buttonContainer}>
            {hasFilters && (
              <TouchableOpacity
                style={[filterStyles.button, {marginRight: 30}]}
                activeOpacity={0.9}
                onPress={onApply}>
                <Icon name="ios-checkmark" color={colors.white} size={30} />
                <Text style={filterStyles.buttonText}>apply</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[filterStyles.button, filterStyles.cancelBtn]}
              onPress={onRequestClose}
              activeOpacity={0.9}>
              <Icon name="ios-close" color={colors.white} size={30} />
              <Text style={filterStyles.buttonText}>cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Filters;
