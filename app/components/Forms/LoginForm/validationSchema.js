import * as Yup from "yup";

// Messages
import messages from "./messages";

export default Yup.object().shape({
  email: Yup.string().email(messages.invalidEmail)
    .required(messages.email),
  password: Yup.string().required(messages.password),
});