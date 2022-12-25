import styled from 'styled-components';

import { device } from '../../styles/devices';

export const StyledContactComponent = styled.span`
  display: flex;
  gap: 0 0.5rem;
  flex-direction: row;
  font-size: 1rem;

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text);
    text-decoration: none;
  }
  & > a:last-child {
    display: none;
  }
  @media ${device.tabletS} {
    & > a:last-child {
      display: block;
    }
  }
`;
