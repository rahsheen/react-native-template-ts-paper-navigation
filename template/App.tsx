/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Paper Navigation template
 * https://github.com/react-native-community/rn-paper-navigation-template
 *
 * @format
 */
import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {useAuth} from './src/context/auth-context';

const AuthenticatedApp = React.lazy(() => import('./src/routes/authenticated'));
const PublicApp = React.lazy(() => import('./src/routes/public'));

const App = () => {
  const {user} = useAuth();

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      {user ? <AuthenticatedApp /> : <PublicApp />}
    </Suspense>
  );
};

export default App;
