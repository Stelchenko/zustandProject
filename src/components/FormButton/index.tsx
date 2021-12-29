import React, {FC} from 'react';
import {TouchableOpacity, Text } from 'react-native';
import {styles} from "./style";
import {FormButtonProps} from "./type";


const FormButton:FC<FormButtonProps> = props => {
  const {buttonTitle, ...rest} = props
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default FormButton
