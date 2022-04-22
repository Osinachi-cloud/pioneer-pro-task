import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeManager';
import Left from './components/pages/left';
import Right from './components/pages/right';
import { Actions } from './interfaces/interfaces';
import { Wrapper } from "./style";


const App: React.FC = () => {
  const [actionList, setActionList] = useState<Actions[]>([]);  
  const [messages, setMessages] = useState<string>("");
  const [addedButtonMessages, setAddedButtonMessages] = useState<string>("");
  const theme = useTheme(); 

return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
        <Left    
          actionList = {actionList}
          setActionList = {setActionList}
          setMessages = {setMessages}
          setAddedButtonMessages ={setAddedButtonMessages}

        />
        <Right
          actionList = {actionList}
          messages = {messages}
          addedButtonMessages ={addedButtonMessages}
        />
 
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
