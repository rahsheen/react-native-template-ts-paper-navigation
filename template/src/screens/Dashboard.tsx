import * as React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {FAB, Portal, Text} from 'react-native-paper';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/paper-ui/Button';
import {useAuth} from '../context/auth-context';
import {AuthenticatedRoutesParamsList} from '../routes/authenticated';
import {useDarkTheme} from '../context/theme-context';
import AppHeader from '../components/AppHeader';

declare const global: {HermesInternal: null | {}};

type DashboardScreenNavigationProp = DrawerNavigationProp<
  AuthenticatedRoutesParamsList,
  'Home'
>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

export default ({navigation}: Props) => {
  const {toggleDark, dark} = useDarkTheme();
  const {logout} = useAuth();

  const fabIcon = dark ? 'brightness-7' : 'brightness-2';

  return (
    <>
      <AppHeader navigation={navigation} title="Welcome" />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View>
            <View style={styles.sectionContainer}>
              <Button mode="outlined" onPress={logout}>
                Logout
              </Button>
              <Text>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
        <Portal>
          <FAB onPress={toggleDark} icon={fabIcon} style={styles.fab} />
        </Portal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 16,
  },
});
