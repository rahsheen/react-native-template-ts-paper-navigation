import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/paper-ui/Background';
import Logo from '../components/paper-ui/Logo';
import Header from '../components/paper-ui/Header';
import Button from '../components/paper-ui/Button';
import TextInput from '../components/paper-ui/TextInput';
import BackButton from '../components/paper-ui/BackButton';
import {emailValidator, passwordValidator} from '../core/utils';
import {useAuth} from '../context/auth-context';
import {useDarkTheme} from '../context/theme-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {UnauthenticatedRoutesParamsList} from '../routes/public';

type LoginScreenScreenNavigationProp = StackNavigationProp<
  UnauthenticatedRoutesParamsList,
  'LoginScreen'
>;

type Props = {
  navigation: LoginScreenScreenNavigationProp;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const {login} = useAuth();
  const {theme} = useDarkTheme();

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    login({email, password});
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text
            style={{
              color: theme.colors.accent,
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text
          style={{
            color: theme.colors.accent,
          }}>
          Don’t have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={{...styles.link, color: theme.colors.primary}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
