import React, { useState, FC, ChangeEvent } from "react";
import { useTheme } from "../../../ThemeManager/index";
import { Wrapper, Button, TextArea, AddButton, InputFormContainer, ButtonsDisplay, ButtonList } from "./style";
import { Actions } from "../../../interfaces/interfaces";

interface Props {
  actionList: Actions[];
  setActionList: (args: any) => void;
  setMessages : (args: any) => void;
  setAddedButtonMessages : (args: any) => void;
}


const Left: FC<Props> = ({ actionList, setActionList, setMessages, setAddedButtonMessages }: Props) => {

  const [action, setAction] = useState<string>("button");
  const [innerButtonMessage, setInnerButtonMessage] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const current = new Date();
  const buttonNum: number = actionList.length + 1

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  

  const handleInnerButtonClick =(event: React.FormEvent)=>{
    event.preventDefault();
    setInnerButtonMessage(`button ${buttonNum} is clicked`)
    setAddedButtonMessages(`button ${buttonNum} is clicked`)
  }

  const handleAddButton = (event: React.FormEvent) => {
    event.preventDefault();
    const date = `${current.getDate() < 10 ? `0${current.getDate() + 1}`: current.getDate() + 1}/${current.getMonth() + 1 < 10? `0${current.getMonth() + 1}`: current.getMonth() + 1}/${current.getFullYear()}`;
    const time = `${current.getHours() < 10 ? `0${current.getHours()}`:`${current.getHours()}` }:${current.getMinutes() < 0 ? `0${current.getMinutes()}` : `${current.getMinutes()}` }:${current.getSeconds() < 10 ? `0${current.getSeconds()}`: `${current.getSeconds()}`}`;
    const timeStamp = `${date} ${time}`;
    const newAction = {buttonName: <input type="submit" onClick={(event)=>{handleInnerButtonClick(event)}} value={action + ( buttonNum)}/> , timeOfAction: timeStamp };
    const newActionList = [newAction, ...actionList ];
    setActionList(newActionList);
    setAction(`button`);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessages(`Message Sent: ${message}`);
    setMessage("");
  };

  const theme = useTheme();

  return (
    <Wrapper>
      <Button onClick={() => theme.toggle()}>
        {theme.mode === "dark" ? "Set light theme" : "Set dark theme"}
      </Button>
      <InputFormContainer>
        <TextArea onChange={(event) => { handleChange(event); }} value={message}></TextArea>
        <div>
          <AddButton disabled={message.length < 1 && true } onClick={(event) => { handleSubmit(event);}}> submit message </AddButton>
        </div>
      </InputFormContainer>

      <ButtonsDisplay>

          <AddButton style={{padding:'5px 10px', fontSize:'1.5rem'}} onClick={(event) => { handleAddButton(event);}} >add button {buttonNum}</AddButton>
          {
              actionList.length > 0 &&
              actionList.map((action: Actions, key: number) => (
              <ButtonList key={key}>
                {action.buttonName} {" "}
                {action.timeOfAction}
              </ButtonList>
            ))
          }
      </ButtonsDisplay>
    </Wrapper>
  );
};

export default Left;









