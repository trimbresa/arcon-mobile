import React, {useState, useEffect, useCallback} from "react";
import {View, TextInput, Text, TouchableOpacity, Picker} from "react-native";
import {withNavigation} from "react-navigation";
import {Formik} from "formik";

import Ionicons from "react-native-vector-icons/Ionicons";

// Formik
import validationSchema from "./validationSchema";
import initialValues from "./initialValues";

// Styles
import newPostFormStyles from "./assets/styles/newPostFormStyles";
import * as colors from "../../../global/styles/colors";

import Attachment from "../../Blocks/Attachment";
import FlashMessageHelper from "../../../helpers/FlashMessageHelper";
import {ActivityIndicator} from "react-native-paper";

const NewPostForm = ({locations, onSubmit, requestSubmitting, navigation}) => {
  const [attachment, setAttachment] = useState(null);

  const onSubmitLocal = (values, actions) => {
    const post = {
      locations:
        values.locations[0] === "all"
          ? locations.map(a => a.value)
          : values.locations,
      note: values.note,
    };

    onSubmit({post, attachment});

    if (!requestSubmitting) {
      actions.setSubmitting(false);
      navigation.navigate("Dashboard");
    }
  };

  const onChangeAttachment = a => {
    setAttachment(a);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmitLocal}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={validationSchema}>
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        handleSubmit,
        setFieldValue,
      }) => {
        if (errors.note) FlashMessageHelper.dangerMessage(errors.note);

        return (
          <View style={newPostFormStyles.wrapper}>
            <Text style={newPostFormStyles.newPostLocationLabel}>Location</Text>

            <Picker
              style={newPostFormStyles.locationPicker}
              selectedValue={values.locations[0]}
              onValueChange={l => setFieldValue("locations", [l])}>
              <Picker.Item label="All Locations" value="all" />
              {locations.map((location, key) => (
                <Picker.Item
                  key={key}
                  label={location.name}
                  value={location.value}
                />
              ))}
            </Picker>

            <TextInput
              value={values.note}
              placeholder="Want to share something?"
              style={newPostFormStyles.newPostInput}
              onChangeText={handleChange("note")}
              onBlur={handleBlur("note")}
              multiline={true}
              autoCorrect={false}
            />

            <Attachment
              style={{marginVertical: 15}}
              onChangeAttachment={onChangeAttachment}
            />

            <TouchableOpacity
              onPress={handleSubmit}
              style={newPostFormStyles.submitBtn}>
              <Text style={newPostFormStyles.submitBtnLabel}>
                {requestSubmitting ? "Submitting... " : "Submit "}
              </Text>

              {requestSubmitting ? (
                <ActivityIndicator color={"white"} />
              ) : (
                <Ionicons name="ios-send" size={18} color={colors.white} />
              )}
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

export default withNavigation(NewPostForm);
