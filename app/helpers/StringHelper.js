const capitalize = s => s.replace(/^\w/, c => c.toUpperCase());
const capitalizeAll = s =>
  s.split(" ").reduce((a, b) => a + " " + capitalize(b), "");

export default {
  capitalize,
  capitalizeAll,
};
