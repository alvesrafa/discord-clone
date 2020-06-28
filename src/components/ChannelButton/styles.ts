import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;

  transition: background .2s;

  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  &.active, &:hover {
    background: var(--quinary);
    >div span {
      color: var(--white);
    }
    > div + div svg {
      display: inline;
    }
  }
  > div + div svg {
    display: none;
  }
`


export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`
export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s; 
  margin-left: 4px;

  &:hover {
    color: var(--white);
  }
`