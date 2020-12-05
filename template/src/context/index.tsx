import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './auth-context';
import {ThemeConsumer, ThemeProvider} from './theme-context';

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProviders({children}: AppProviderProps) {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({theme}) => (
          <PaperProvider theme={theme}>
            <AuthProvider>{children}</AuthProvider>
          </PaperProvider>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
}
export default AppProviders;
