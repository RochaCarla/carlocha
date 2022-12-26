import styled from 'styled-components';

import { device } from '../../styles/devices';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${device.tabletS} {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 0.5rem;
  background-color: var(--background);

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;

export const OutletContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  color: var(--text);
  background-color: var(--background-profile-card);

  box-shadow: 0px 0px 10px 0px var(--shadow);

  & > .markdown-body > h1,
  h2,
  h3,
  h4,
  p {
    margin-bottom: 1rem;
  }
  & > .markdown-body * a {
    color: var(--primary);

    &:hover {
      color: var(--secondary);
    }
  }

  @media ${device.tabletS} {
    padding: 2rem;
  }
`;
