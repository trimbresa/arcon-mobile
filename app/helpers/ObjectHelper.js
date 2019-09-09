export default class ObjectHelper {
  /**
   * @description Checks if object is not null
   * @author Trim Bresa
   */
  static objNotNull(obj) {
    const isObject = Object.prototype.toString.call(obj) === "[object Object]";

    if (isObject) {
      return obj ? Object.keys(obj).length !== 0 : false;
    } else {
      return false;
    }
  }
}
