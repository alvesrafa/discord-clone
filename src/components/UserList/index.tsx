import React from "react";
import { Container, User, Avatar, Role } from "./styles";

interface UserProps {
  nick: string;
  isBot? : boolean;
}
const UserRow: React.FC<UserProps> = ({isBot, nick}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nick}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};
const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nick="Rafael Alves" />
      <Role>Offline - 18</Role>
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" isBot />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
      <UserRow nick="Outro usuário" />
    </Container>
  );
};

export default UserList;
