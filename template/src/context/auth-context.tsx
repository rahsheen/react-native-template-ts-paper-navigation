import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';

type AuthContextType = {
  user?: any;
  login: (user: any) => void;
  logout: () => void;
  register: () => void;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

function AuthProvider({children}: Props) {
  const [data, setData] = React.useState<any>();

  // TODO: code for pre-loading the user's information if we have their token in
  // localStorage goes here
  useEffect(() => {
    setData({});
  }, []);

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  if (!data) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const login = (loginData: any) => {
    setData({user: loginData});
  }; // make a login request
  const register = () => {}; // register the user
  const logout = () => {
    setData({});
  }; // clear the token in localStorage and the user data

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  const user = data?.user;
  const authContextValue = {user, login, logout, register};

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext) as AuthContextType;

export {AuthProvider, useAuth};
