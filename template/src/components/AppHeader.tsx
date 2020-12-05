import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';

type Props = {
  navigation: any;
  title: string;
};

const AppHeader = ({navigation, title}: Props) => {
  return (
    <Appbar.Header>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <IconButton size={24} icon="menu" />
      </TouchableOpacity>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default AppHeader;
