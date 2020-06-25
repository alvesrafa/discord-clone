import React from "react";
import { Container } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName />
    </Container>
  );
};

export default Layout;
