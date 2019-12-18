import React, {useState} from "react";
import {Modal, TextInput, Text, TouchableOpacity} from "react-native";
import resetPasswordStyles from "../PasswordManager/assets/resetPasswordStyles";
import AuthService from "../../../services/AuthService";
import FlashMessageHelper from "../../../helpers/FlashMessageHelper";
import {ActivityIndicator} from "react-native-paper";
import StorageManager from "../../../helpers/StorageManager";

const ResetPassword = ({
  onRequestClose,
  visible,
  reset = false,
  onResetSuccess: onResetSuccessParent,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onResetSuccess = onResetSuccessParent || onRequestClose;

  const submit = () => {
    setLoading(true);
    if (oldPassword && newPassword)
      AuthService.resetPassword(oldPassword, newPassword)
        .then(r => {
          StorageManager.set("token", r.data.token);
          FlashMessageHelper.successMessage(r.data.message);
          setLoading(false);
          onResetSuccess();
        })
        .catch(e => {
          setLoading(false);
          setError(e.response.data);
          console.dir(e.response);
        });
    else {
      setError("Please fill both fiels");
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onRequestClose}
        style={resetPasswordStyles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          style={resetPasswordStyles.container}>
          <Text style={resetPasswordStyles.title}>Change your password</Text>

          <Text style={resetPasswordStyles.label}>Current Password</Text>
          <TextInput
            value={oldPassword}
            onChangeText={e => {
              setOldPassword(e);
              setError(false);
            }}
            secureTextEntry={true}
            placeholder="Current Password"
            style={resetPasswordStyles.input}
          />

          <Text style={resetPasswordStyles.label}>New Password</Text>
          <TextInput
            secureTextEntry={true}
            value={newPassword}
            placeholder="New Password"
            style={resetPasswordStyles.input}
            onChangeText={e => {
              setNewPassword(e);
              setError(false);
            }}
          />

          {error && <Text style={resetPasswordStyles.errorMsg}>{error}</Text>}

          <TouchableOpacity
            onPress={submit}
            activeOpacity={0.7}
            style={resetPasswordStyles.submitBtn}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={resetPasswordStyles.submitBtnText}>Submit</Text>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ResetPassword;
