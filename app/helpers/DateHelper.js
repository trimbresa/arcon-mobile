import moment from "moment";

class DateHelper {
  static format(fullDate, formatType = "DD MMM YYYY") {
    return moment(fullDate).format(formatType);
  }

  static formatFromNow(fullDate) {
    return moment(fullDate).fromNow();
  }

  static formatWithTimezone(fullDate, formatType = "DD MMM YYYY") {
    return moment(fullDate).format(formatType);
  }

  static formatWithFullDate(fullDate, formatType = "DD MMM YYYY") {
    return moment(fullDate).toISOString();
  }
}

export default DateHelper;