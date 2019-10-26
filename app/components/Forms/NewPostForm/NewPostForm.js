import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from "react-native";
import {withNavigation} from "react-navigation";
import {Formik} from "formik";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Formik
import validationSchema from "./validationSchema";
import initialValues from "./initialValues";

// Styles
import newPostFormStyles from "./assets/styles/newPostFormStyles";
import * as colors from "../../../global/styles/colors";

const NewPostForm = (props) => {
  return (
    <Formik
      initialValues={initialValues({locations: props.locations})}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        const valuesToSend = Object.assign({}, values);

        // Reove unwanted data from being sent to API 
        delete valuesToSend.selectedLocation;
        delete valuesToSend.activePost;

        props.onSubmit(valuesToSend);

        if(!props.requestSubmitting){
          actions.setSubmitting(false);
          alert("Your post has been submitted successfully.");
          props.fetchDashboard();
          props.navigation.navigate("Dashboard");
        }
      }}
      validationSchema={validationSchema}>
      {({
        values,
        setFieldValue,
        handleChange,
        handleBlur,
        touched,
        errors,
        handleSubmit,
      }) => (
        <>
          <View style={newPostFormStyles.locationPickerHeader}>
            <Text style={newPostFormStyles.newPostFormLabel}>Location</Text>
            <Picker
              selectedValue={values.selectedLocation}
              style={{flex: 1}}
              onValueChange={(location, key) => {
                if(location === "all") {
                  setFieldValue("selectedLocation", location);
                  return setFieldValue("locations", props.locations.map(l => l.id));
                } else {
                  setFieldValue("selectedLocation", location);
                  setFieldValue("locations", [location]);
                }
              }}
            >
              <Picker.Item label="All Locations" value="all" />
              {props.locations.map((location, key) => (
                <Picker.Item
                  key={key}
                  label={location.description}
                  value={location.code}
                />
              ))}
            </Picker>
          </View>
          <View style={newPostFormStyles.newPostWrapper}>
            <TextInput
              value={values.note}
              placeholder="Want to share something?"
              style={newPostFormStyles.newPostInput}
              onChangeText={handleChange("note")}
              onBlur={handleBlur("note")}
              multiline={true}
              autoCorrect={false}
            />
            <Text style={newPostFormStyles.fieldMsg}>
              {touched.note && errors.note && errors.note}
            </Text>
          </View>
          {values.activePost === "photo" && (
            <ScrollView
              horizontal={true}
              contentContainerStyle={newPostFormStyles.newPostPreview}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={newPostFormStyles.newPostPreviewMedia}>
                <ImageBackground
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l2aCzdkOzhPQhgH11qxegC1LbZq30UMw8vtgAFOqL892arOv_A",
                  }}
                  style={newPostFormStyles.newPostPreviewImage}>
                  <TouchableOpacity style={newPostFormStyles.deleteBtn}>
                    <Ionicons name="md-trash" size={16} color={colors.white} />
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
          )}
          <ScrollView
            horizontal={true}
            contentContainerStyle={newPostFormStyles.newPostFooter}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                newPostFormStyles.newPostTypeLabel,
                values.activePost === "text" &&
                  newPostFormStyles.newPostTypeLabelActive,
              ]}
              onPress={() => setFieldValue("activePost", "text")}>
              <Entypo name="text" size={19} color={colors.green} />
              <Text style={newPostFormStyles.newPostTypeLabelText}>Text</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[
                newPostFormStyles.newPostTypeLabel,
                props.values.activePost === "photo" &&
                  newPostFormStyles.newPostTypeLabelActive,
              ]}
              onPress={() => props.setFieldValue("activePost", "photo")}>
              <SimpleLineIcons
                name="picture"
                size={18}
                color={colors.primaryColor}
              />
              <Text
                style={[
                  newPostFormStyles.newPostTypeLabelText,
                  props.values.activePost === "photo" &&
                    newPostFormStyles.newPostTypeLabelActive,
                ]}>
                Photo
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={newPostFormStyles.newPostTypeLabel}>
              <AntDesign name="videocamera" size={18} color={colors.red} />
              <Text style={newPostFormStyles.newPostTypeLabelText}>Video</Text>
            </TouchableOpacity> */}
          </ScrollView>
          <View style={newPostFormStyles.footerWrapper}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[newPostFormStyles.submitBtn]}
            >
              <Text style={newPostFormStyles.submitBtnLabel}>
                {props.requestSubmitting ? "Submitting... " : "Submit "}
                <MaterialCommunityIcons
                  name="send"
                  size={16}
                  color={colors.white}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
}

export default withNavigation(NewPostForm);