import styled from 'styled-components';

export const ThemeSwitchContainer = styled.div`
  z-index: 1;
  align-self: end;
  color: var(--title);
  height: 25px;

  &:hover {
    border-radius: 50%;
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px var(--secondary);
  }
`;
