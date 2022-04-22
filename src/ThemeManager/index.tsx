import React, { ReactElement, ReactNode } from "react";
import { ThemeContext } from '../interfaces/interfaces';

const defaultMode = 'light';

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext({
  mode: defaultMode,
  toggle: () => { }
});

export const useTheme = () => React.useContext(ManageThemeContext); // change useTheme to themeContext

export const ThemeManager: React.FC<{ children: ReactNode}> = ({ children }) : ReactElement => {

  const [themeState, setThemeState] = React.useState({
    mode: defaultMode
  });

  const toggle = (): void => {
    setThemeState({ mode: (themeState.mode === 'light' ? `dark` : `light`) });

  }

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {children}
    </ManageThemeContext.Provider>
  );
}


