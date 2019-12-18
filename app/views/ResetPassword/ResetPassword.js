import React, {useState, useEffect, useRef, useReducer} from "react";
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import {withNavigation} from "react-navigation";
import Styles from "./assets/styles/styles";
import {TextInput} from "react-native-gesture-handler";
import {createStackNavigator} from "react-navigation-stack";
import {ActivityIndicator} from "react-native-paper";
import PasswordManager from "../../components/Forms/PasswordManager";
import AuthService from "../../services/AuthService";
import FlashMessageHelper from "../../helpers/FlashMessageHelper";
import StorageManager from "../../helpers/StorageManager";

const init = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

const CodeInput = ({submit}) => {
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [values, setValues] = useState(init);

  const onChange = (value, i) => {
    if (value.length > 1 || isNaN(parseInt(value))) return;
    setValues({...values, [i]: value});
    if (i < 5) refs[i + 1].current.focus();
  };

  const onFocus = () => {
    for (let i = 0; i < Object.keys(values).length; i++)
      if (values[i].length === 0) {
        refs[i].current.focus();
        break;
      }
  };

  useEffect(() => {
    values[5] &&
      Object.values(values).every(v => !isNaN(parseInt(v)) && v.length === 1) &&
      submit(Object.values(values).join(""));
  }, [values, submit]);

  return (
    <View style={Styles.codeWrapper}>
      {[1, 1, 1, 1, 1, 1].map((v, i) => (
        <TextInput
          key={`${i}`}
          onFocus={() => onFocus(i)}
          selectTextOnFocus={true}
          ref={refs[i]}
          clearTextOnFocus={true}
          value={values[i]}
          style={Styles.codeInput}
          keyboardType="numeric"
          autoFocus={i === 0}
          maxLength={1}
          onChangeText={t => onChange(t, i)}
          placeholder="_"
        />
      ))}
    </View>
  );
};

const ResetPassword = ({navigation}) => {
  const employeeCode = navigation.getParam("code") || "040288";
  const [value, setValue] = useState(employeeCode);
  const [loading, setLoading] = useState(false);
  const [inputNewPassword, setInputNewPassword] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const title = confirmationSent
    ? "Please enter the Verification Code"
    : "Please enter your Employee Code";

  const submit = async (v = value) => {
    setLoading(true);
    if (v.length > 0) {
      if (confirmationSent) {
        const token = await StorageManager.set("verifyCodeToken");
        if (!token) {
          FlashMessageHelper.dangerMessage("Something went wrong");
          return;
        }
        const res = await AuthService.verifyCode({code: v, token});
        console.log(res);
        // setInputNewPassword(true);
      } else {
        try {
          const res = await AuthService.askForPasswordReset({employeeCode: v});
          console.log(res);

          // StorageManager.set("verifyCodeToken", r.data.token);
          // setConfirmationSent(true);
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      FlashMessageHelper.dangerMessage("Please enter your Employee Code");
    }
    setLoading(false);
  };

  const onResetSuccess = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("./assets/images/gym.jpg")}
      style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.innerContainer}>
        <Text style={Styles.indicator}>Reset your password</Text>

        <Text style={Styles.title}>{title}</Text>

        {confirmationSent && <CodeInput submit={submit} />}

        {!confirmationSent && (
          <React.Fragment>
            <TextInput
              keyboardType="numeric"
              style={Styles.input}
              placeholder="Your employee code"
              value={value}
              onChangeText={setValue}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={submit}
              style={Styles.submitBtn}>
              <Text style={Styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </ScrollView>

      <PasswordManager
        resetting={true}
        onResetSuccess={onResetSuccess}
        employeeCode={employeeCode}
        // TODO: remove this
        onRequestClose={() => setInputNewPassword(false)}
        visible={inputNewPassword}
      />

      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.7)",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </ImageBackground>
  );
};

const ResetPasswordRouter = createStackNavigator(
  {
    ResetPassword,
  },
  {
    headerMode: "none",
  },
);

export default withNavigation(ResetPasswordRouter);
