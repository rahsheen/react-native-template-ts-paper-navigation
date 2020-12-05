import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useDarkTheme} from '../../context/theme-context';

type Props = {
  children: React.ReactNode;
};

const Header = ({children}: Props) => {
  const {theme} = useDarkTheme();

  return (
    <Text style={{...styles.header, color: theme.colors.primary}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
