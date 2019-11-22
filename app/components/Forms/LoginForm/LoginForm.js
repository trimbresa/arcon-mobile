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
      onSubmit={async values => {
        await props.authenticate(values);
        props.navigation.navigate("AuthLoading");
      }}
      validationSchema={validationSchema}>
      {props => (
        <View style={loginFormStyles.loginFormWrapper}>
          <Text style={loginFormStyles.loginFormTitle}>
            Login to your account
          </Text>

          <View style={loginFormStyles.loginFieldsWrapper}>
            <View style={loginFormStyles.loginFieldsGroup}>
              <TextInput
                onChangeText={props.handleChange("employeeCode")}
                onBlur={props.handleBlur("employeeCode")}
                value={props.values.employeeCode}
                placeholder="Employee Number"
                style={loginFormStyles.field}
                placeholderTextColor={colors.secondaryColor}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="numeric"
              />
              <Text style={loginFormStyles.fieldMsg}>
                {props.touched.email &&
                  props.errors.email &&
                  props.errors.email}
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
              <Text style={loginFormStyles.fieldMsg}>
                {props.touched.password &&
                  props.errors.password &&
                  props.errors.password}
              </Text>
            </View>
          </View>

          <View style={loginFormStyles.submitBtnWrapper}>
            <TouchableOpacity
              onPress={props.handleSubmit}
              disabled={props.isSubmitting}
              style={[
                loginFormStyles.submitBtn,
                props.isSubmitting && loginFormStyles.submitBtnInProgress,
              ]}
              activeOpacity={0.9}>
              <>
                <Text style={loginFormStyles.submitBtnLabel}>
                  {props.isSubmitting ? "Logging in..." : "Login"}
                </Text>
                <Feather name="arrow-right" color={colors.white} size={20} />
              </>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
