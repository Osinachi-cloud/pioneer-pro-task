import React, { FC } from "react";
import { useTheme } from "../../../ThemeManager/index";
import { Actions } from "../../../interfaces/interfaces";
import { Wrapper } from "./style";

interface Props {
  actionList: Actions[];
  messages: string;
  addedButtonMessages:string;
}

const Right: FC<Props> = ({ actionList, messages, addedButtonMessages }: Props) => {
  const theme = useTheme();

  const current = new Date(); 

  const date = `${current.getDate() < 10 ? `0${current.getDate() + 1}`: current.getDate() + 1}/${current.getMonth() + 1 < 10? `0${current.getMonth() + 1}`: current.getMonth() + 1}/${current.getFullYear()}`;
  const time = `${current.getHours() < 10 ? `0${current.getHours()}`: `${current.getHours()}` }:${current.getMinutes() < 0 ? `0${current.getMinutes()}` : `${current.getMinutes()}` }:${current.getSeconds() < 10 ? `0${current.getSeconds()}`: `${current.getSeconds()}`}`;
  const timeStamp = `${date} ${time}`;

  return (
    <Wrapper>
      <div>
        {timeStamp} {`theme was set to ${theme.mode}`}
      </div>
      <div>{messages}</div>
      <div>
        {  actionList.length > 0 &&
             `button ${actionList.length} added`
        }
      </div>
  
      <div>{addedButtonMessages}</div>

    </Wrapper>
  );
};

export default Right;









