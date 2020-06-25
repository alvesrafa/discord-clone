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
          src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
          alt="Logo"
        />
      )}
    </Container>
  );
};

export default ServerButton;
