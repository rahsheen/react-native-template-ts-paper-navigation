import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {Header} from 'react-native/Libraries/NewAppScreen';
import BackButton from '../components/paper-ui/BackButton';
import Background from '../components/paper-ui/Background';
import Button from '../components/paper-ui/Button';
import Logo from '../components/paper-ui/Logo';
import TextInput from '../components/paper-ui/TextInput';
import {useDarkTheme} from '../context/theme-context';
import {emailValidator} from '../core/utils';
import {UnauthenticatedRoutesParamsList} from '../routes/public';

type ForgotPasswordScreenScreenNavigationProp = StackNavigationProp<
  UnauthenticatedRoutesParamsList,
  'ForgotPasswordScreen'
>;

type Props = {
  navigation: ForgotPasswordScreenScreenNavigationProp;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const {theme} = useDarkTheme();

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{...styles.label, color: theme.colors.secondary}}>
          ← Back to login
        </Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
