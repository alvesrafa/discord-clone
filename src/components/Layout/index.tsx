import React from "react";
import { Container } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Container>
  );
};

export default Layout;
