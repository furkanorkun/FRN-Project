import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assests/theme/colors';
import styles from './styles';

const Input = ({
  error,
  onChangeText,
  iconPosition,
  icon,
  value,
  label,
  style,
  //All other default TextInput needs sent with ...props
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          //Every time you get out of focus the input field, the event will trigger
          onBlur={() => setFocused(false)}
          //You must add to the bottom ...props
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
