// import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorage} from 'react-native';

/**
 * @description Manages window.storage
 * @returns storage objects
 * @class StorageManager
 */
class StorageManager {
  /**
   * @description Set or update given value in localStorage
   * @static
   * @returns Object
   * @memberof StorageManager
   */
  static async set(key, value) {
    if (key && value) {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));

        return {
          success: true,
          data: "Storage has been set successfully.",
        };
      } catch(error) {
        console.log(error);

        return {
          error: "Couldn't set data to AsyncStorage!",
        };
      }
    }

    return {
      error: "Storage was not set. Storage key and value is required!",
    };
  }

  /**
   * @description Fetch data from localStorage
   * @static
   * @returns Object
   * @memberof StorageManager
   */
  static async get(key) {
    if (key) {
      try {
        const dataFromStorage = await AsyncStorage.getItem(key);
        return JSON.parse(dataFromStorage);
      } catch (error) {
        console.log(error);

        return {
          error: "Couldn't get data from AsyncStorage!",
        };
      }
    }

    return { error: "Storage key is required!" };
  }

  /**
   * @description Clear only one value from localStorage
   * @static
   * @returns Object
   * @memberof StorageManager
   */
  static async clearOne(key) {
    if (key) {
      try {
        await AsyncStorage.removeItem(key);

        return {
          success: true,
          data: "One storage has been cleared successfully.",
        };
      } catch (error) {
        console.log(error);

        return {
          error: "Clear one failed!",
        };
      }
    }

    return {error: "Storage key is required!"};
  }

  /**
   * @description Clear all values from localStorage
   * @static
   * @returns Object
   * @memberof StorageManager
   */
  static async clearAll() {
    try {
      await AsyncStorage.clear();

      return {
        success: true,
        data: "All storage has been cleared successfully.",
      };
    } catch (error) {
      console.log(error);

      return {
        error: "Clear all failed!",
      };
    }
  }
}

export default StorageManager;
