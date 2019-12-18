import React, {useState} from "react";
import {Modal, TextInput, Text, TouchableOpacity} from "react-native";
import passwordManagerStyles from "./assets/styles/passwordManagerStyles";
import AuthService from "../../../services/AuthService";
import FlashMessageHelper from "../../../helpers/FlashMessageHelper";
import {ActivityIndicator} from "react-native-paper";
import StorageManager from "../../../helpers/StorageManager";

const PasswordManager = ({
  onRequestClose,
  visible,
  resetting = false,
  employeeCode: employeeCodeParent = "",
  onResetSuccess: onResetSuccessParent,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [employeeCode, setEmployeeCode] = useState(employeeCodeParent);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onResetSuccess = onResetSuccessParent || onRequestClose;

  const submit = async () => {
    setLoading(true);
    if (
      resetting &&
      oldPassword &&
      newPassword &&
      employeeCode &&
      oldPassword == newPassword
    ) {
      try {
        const token = await StorageManager.get("verifyCodeToken");

        if (!token) {
          FlashMessageHelper.dangerMessage("Something went wrong");
          return;
        }

        const res = await AuthService.resetPassword({
          token,
          employeeCode,
          password: newPassword,
        });

        console.log(res);

        // StorageManager.set("token", r.data.token);
        FlashMessageHelper.successMessage(
          "Password has been successfully reset",
        );
        // onResetSuccess()
        return;
      } catch (e) {
        console.log(e);
      }
    } else if (oldPassword && newPassword) {
      try {
        const r = await AuthService.changePassword(oldPassword, newPassword);
        StorageManager.set("token", r.data.token);
        FlashMessageHelper.successMessage(r.data.message);
        setLoading(false);
        onResetSuccess();
        return;
      } catch (e) {
        setLoading(false);
        setError(e.response.data);
        console.dir(e.response);
      }
    }

    setError(
      resetting
        ? !employeeCode
          ? "Please input your employee code"
          : "Passwords don't match"
        : "Please fill both fiels",
    );
    setLoading(false);
  };

  const title1 = `${resetting ? "New" : "Current"} Password`;
  const title2 = `${resetting ? "Confirm " : ""}New Password`;

  return (
    <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onRequestClose}
        style={passwordManagerStyles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          style={passwordManagerStyles.container}>
          <Text style={passwordManagerStyles.title}>Change your password</Text>

          {resetting && (
            <React.Fragment>
              <Text style={passwordManagerStyles.label}>
                Your Employee Code
              </Text>
              <TextInput
                keyboardType="numeric"
                maxLength={6}
                value={employeeCode}
                onChangeText={e => {
                  !isNaN(parseInt(e)) && setEmployeeCode(e);
                }}
                placeholder="Your Employee Code"
                style={passwordManagerStyles.input}
              />
            </React.Fragment>
          )}

          <Text style={passwordManagerStyles.label}>{title1}</Text>
          <TextInput
            value={oldPassword}
            onChangeText={e => {
              setOldPassword(e);
              setError(false);
            }}
            secureTextEntry={true}
            placeholder={title1}
            style={passwordManagerStyles.input}
          />

          <Text style={passwordManagerStyles.label}>{title2}</Text>
          <TextInput
            secureTextEntry={true}
            value={newPassword}
            placeholder={title2}
            style={passwordManagerStyles.input}
            onChangeText={e => {
              setNewPassword(e);
              setError(false);
            }}
          />

          {error && <Text style={passwordManagerStyles.errorMsg}>{error}</Text>}

          <TouchableOpacity
            onPress={submit}
            activeOpacity={0.7}
            style={passwordManagerStyles.submitBtn}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={passwordManagerStyles.submitBtnText}>Submit</Text>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default PasswordManager;
