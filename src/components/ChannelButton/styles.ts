import styled from 'styled-components';

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
  }

`


export const HashtagIcon = styled.div`
`
export const InviteIcon = styled.div`
`
export const SettingsIcon = styled.div`
`