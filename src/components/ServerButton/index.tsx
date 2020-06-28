import React from "react";

import { Container } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = (props: Props) => {
  const { selected, isHome, hasNotifications, mentions } = props;

  return (
    <Container
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    selected={selected}
    >
      {isHome && (
        <img
          src="https://image.flaticon.com/icons/svg/356/356060.svg"
          alt="Logo"
        />
      )}
    </Container>
  );
};

export default ServerButton;
