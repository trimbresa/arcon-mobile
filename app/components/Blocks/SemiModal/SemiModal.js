import React from "react";
import PropTypes from "prop-types";
import {Text, View, Modal, TouchableOpacity, StatusBar} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Styles
import semiModalStyles from "./assets/styles/semiModalStyles";
import * as colors from "../../../global/styles/colors";

function SemiModal({
  showModal,
  switchToSchedule,
  children,
  title,
  onRequestClose,
  ...rest
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={onRequestClose}>
      <View style={semiModalStyles.schedulePopup}>
        <View style={semiModalStyles.schedulePopupContent}>
          <View style={semiModalStyles.schedulePopupHeader}>
            <TouchableOpacity
              style={semiModalStyles.exitWrapper}
              onPress={onRequestClose}>
              <Ionicons name="md-close" size={23} color={colors.black} />
            </TouchableOpacity>
            <Text style={semiModalStyles.schedulePopupHeaderTitle}>
              {title}
            </Text>
          </View>
          <View style={semiModalStyles.schedulePopupBody}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

SemiModal.defaultProps = {
  showModal: false,
  switchToSchedule: () => alert("Method not provided!"),
  children: [],
};

SemiModal.propTypes = {
  showModal: PropTypes.bool,
  switchToSchedule: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

export default SemiModal;
