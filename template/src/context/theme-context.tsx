import React, {useState} from 'react';
import {DefaultTheme, DarkTheme} from '../core/theme';

interface darkThemeContext {
  dark: boolean;
  theme?: any;
  toggleDark: () => void;
}

const ThemeContext = React.createContext<darkThemeContext>({
  dark: false,
  toggleDark: () => {},
});
const ThemeConsumer = ThemeContext.Consumer;

const ThemeProvider = (props: {children: React.ReactNode}) => {
  const [dark, setDark] = useState(false);

  const toggleDark = React.useCallback(() => {
    return setDark((wasDark) => !wasDark);
  }, [setDark]);

  const themeContextValue = React.useMemo(
    () => ({
      dark,
      toggleDark,
      theme: dark ? DarkTheme : DefaultTheme,
    }),
    [dark, toggleDark],
  );

  return <ThemeContext.Provider value={themeContextValue} {...props} />;
};

const useDarkTheme = () => React.useContext(ThemeContext);

export {ThemeProvider, useDarkTheme, ThemeConsumer};
