export default function initialValues({ locations = [] }) {
  return {
    note: "",
    selectedLocation: "",
    activePost: "text",
    locations: locations.map(l => l.id)
  };
}