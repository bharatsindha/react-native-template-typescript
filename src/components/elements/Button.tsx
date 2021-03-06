import {useTheme} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {typography} from '@/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export const Button = ({
  style,
  textStyle,
  title,
  ...rest
}: {title: string; style: any; textStyle: any} & React.ComponentProps<
  typeof TouchableOpacity
>) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, {borderColor: colors.border}, style]}
      {...rest}>
      <Text style={[{color: colors.text}, typography.label, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
