import * as Yup from "yup";

// Messages
import messages from "./messages";

export default Yup.object().shape({
  employeeCode: Yup.number().required(messages.employeeCode),
  password: Yup.string().trim().required(messages.password),
});