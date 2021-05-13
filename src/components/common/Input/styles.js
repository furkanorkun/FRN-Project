import {StyleSheet} from 'react-native';
import colors from '../../../assests/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    width: '100%',
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 5,
    fontSize: 12,
  },
});
