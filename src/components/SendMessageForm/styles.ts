import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_TERTIARY,
    height: 184,
    paddingBottom: getBottomSpace() + 10,
    paddingHorizontal: 24,
    paddingTop: 15,
    width: '100%',
  },
  input: {
    color: COLORS.WHITE,
    height: 88,
    width: '100%',
    textAlignVertical: 'top'
  }
});