import {showMessage} from "react-native-flash-message";

const show = (message, type) =>
  showMessage({
    message,
    type,
    duration: 4000,
  });

export default {
  successMessage: m => show(m, "success"),
  dangerMessage: m => show(m, "danger"),
  warningMessage: m => show(m, "warning"),
  infoMessage: m => show(m, "info"),
  defaultMessage: m => show(m, "default"),
};
