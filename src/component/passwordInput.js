import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
// import { TextField } from "react-native-material-textfield";
// import { Textfield } from 'react-native-material-kit';
import MaskInput from 'react-native-mask-input';

const PasswordInputText = ({
  iconSize,
  iconColor,
  label,
  style,
  getRef,
  ...rest
}) => {
  const [eyeIcon, setEyeIcon] = useState("visibility-off");
  const [isPassword, setIsPassword] = useState(true);

  const changePwdType = () => {
    setEyeIcon(isPassword ? "visibility" : "visibility-off");
    setIsPassword((prevState) => !prevState);
  };

  const passReference = (ref) => {
    if (getRef) getRef(ref);
  };

  return (
    <View style={style}>
      <MaskInput
        {...rest}
        ref={passReference}
        secureTextEntry={isPassword}
        autoCorrect={false}
        style={styles.inputText}
        // label={label}
      />
      <Icon
        style={styles.icon}
        name={eyeIcon}
        size={iconSize}
        color={iconColor}
        onPress={changePwdType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    // padding: 5,
    // paddingLeft: 0,
    marginTop: 0,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#222',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    // borderColor: "#005F53",
    paddingHorizontal: 12,
    borderRadius: 5,
    // borderBottomWidth: 1,
    // borderColor: '#0F5F54',
    // fontWeight: 'bold',
  },
  icon: {
    position: "absolute",
    top: 12,
    right: 12,
  },
});

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: "Password",
  iconColor: "#222222",
};

PasswordInputText.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string,
};

export default PasswordInputText;
