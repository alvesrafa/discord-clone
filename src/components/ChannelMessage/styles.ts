import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;

  background: transparent;
  &.mention {
    background: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }
  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  background: var(--secondary);
  border-radius: 50%;

  &.bot {
    background: var(--mention-detail);
  }
`
export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  > strong {
    color: var(--white);
    font-size: 16px;
  }

  > span {
    margin-left: 6px;
    background: var(--discord);
    color: var(--white);
    text-transform: uppercase;
    padding: 4px 5px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: bold;
  }
  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;

  }
`
export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);
`

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`