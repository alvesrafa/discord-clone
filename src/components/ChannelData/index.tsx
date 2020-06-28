import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ServerName: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Outro usuário"
          date="28/06/2020"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue non purus venenatis auctor eget id erat."
        />
        <ChannelMessage
          author="Outro usuário"
          date="28/06/2020"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget augue non purus venenatis auctor eget id erat."
        />
        <ChannelMessage
          author="raufa"
          date="28/06/2020"
          content="Olhem esse clone que maneiro!"
        />
        <ChannelMessage
          author="Christopher"
          date="28/06/2020"
          content={
            <>
              <Mention>@raufa</Mention> Ficou muito massa!
            </>
          }
        />
        <ChannelMessage
          author="Bot do chat"
          isBot
          date="28/06/2020"
          content="Brabo!"
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ServerName;
