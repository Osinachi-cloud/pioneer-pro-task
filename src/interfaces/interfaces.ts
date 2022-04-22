export interface Actions {
    buttonName: string;
    timeOfAction: string;
  }

  export interface Message{
    message: string;
  }

  export interface ThemeContext {
    mode: string,
    toggle (): void;
  }