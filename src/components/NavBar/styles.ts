import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../styles/devices';

export const NavBarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 42px;
  padding: 4px 10px;
  flex-direction: row;
  border-radius: 50px;
  background: var(--primary);
  justify-content: space-around;
  align-items: center;
  gap: 0rem;
  margin: 0.5rem 0 1rem 0;

  @media ${device.tabletS} {
    margin-bottom: 2rem;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  background: 'black';
  text-decoration: none;
  color: var(--text-inverse);
  border-radius: 50px;
  border: 2px solid transparent;
  padding: 2px 8px;

  &.active {
    background-color: var(--background);
    color: var(--text);

    &:hover {
      color: var(--text);
    }
  }

  &:hover {
    border: 2px solid var(--background);
    color: var(--text-inverse);
  }

  @media ${device.tabletS} {
    padding: 0 10px;
  }
`;
