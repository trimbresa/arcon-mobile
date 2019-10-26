import * as Yup from "yup";

// Messages
import messages from "./messages";

export default Yup.object().shape({
  note: Yup.string().trim().required(messages.note),
  locations: Yup.array(),
  selectedLocation: Yup.string(),
  activePost: Yup.string()
});