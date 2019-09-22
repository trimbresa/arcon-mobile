import React from "react";
import {TouchableOpacity, TextInput, View, Text} from "react-native";
import {Formik} from "formik";
import Feather from "react-native-vector-icons/Feather";

// Formik
import validationSchema from "./validationSchema";
import initialValues from "./initialValues";

// Styles
import loginFormStyles from "./assets/styles/loginFormStyles";
import * as colors from "../../../global/styles/colors";

export default function LoginForm(props) {
  return (
    <Formik
      initialValues={initialValues({})}
      onSubmit={values => {
        props.navigation.navigate("App")
      }}
      validationSchema={validationSchema}
    >
      {props => (
        <View
          style={loginFormStyles.loginFormWrapper}
        >
          <Text
            style={loginFormStyles.loginFormTitle}
          >
            Login to your account
          </Text>
          
          <View style={loginFormStyles.loginFieldsWrapper} >
            <View style={loginFormStyles.loginFieldsGroup}>
              <TextInput
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                value={props.values.email}
                placeholder="Email"
                style={loginFormStyles.field}
                placeholderTextColor={colors.secondaryColor}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <Text
                style={loginFormStyles.fieldMsg}
              >
                {props.touched.email && props.errors.email && props.errors.email}
              </Text>
            </View>
            <View style={loginFormStyles.loginFieldsGroup}>
              <TextInput
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                value={props.values.password}
                placeholder="Password"
                style={loginFormStyles.field}
                placeholderTextColor={colors.secondaryColor}
                secureTextEntry={true}
              />
              <Text
                style={loginFormStyles.fieldMsg}
              >
                {props.touched.password && props.errors.password && props.errors.password}
              </Text>
            </View>
          </View>

          <View
            style={loginFormStyles.submitBtnWrapper}
          >
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={loginFormStyles.submitBtn}
              activeOpacity={0.9}
            >
              <>
                <Text
                  style={loginFormStyles.submitBtnLabel}
                >
                  Login
                </Text>
                <Feather
                  name="arrow-right"
                  color={colors.white}
                  size={20}
                />
              </>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
