import styled from 'styled-components';

import { device } from '../../styles/devices';

export const CardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  background-color: var(--background-profile-card);
  padding-bottom: 1rem;

  @media ${device.tabletS} {
    gap: 1rem;
    font-size: 18px;
    width: 320px;
    min-width: 240px;
    flex-direction: column;
    gap: 10px 0;
    padding: 0px;

    & > p {
      text-align: center;
      padding: 0 1.25rem;
    }
    & > h2 {
      text-align: center;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: -3rem auto 0 0;
  padding: 0 0.75rem;
  gap: 0.75rem;
  background-color: var(--background-profile-card);

  & > div:nth-child(1) {
    order: 3;
    align-self: start;
    margin: -1rem 0 0 0;
  }

  @media ${device.tabletS} {
    gap: 0.5rem;
    flex-direction: column;
    margin: -8rem auto 0 auto;

    & > div:nth-child(1) {
      order: 0;
      align-self: end;
      margin: 0;
    }
  }
`;

export const MainInfoContainer = styled.div`
  margin: 0.5rem 0 0 0;
  z-index: 1;
  color: var(--text);

  & > h2 {
    color: var(--text-inverse);
  }
  & > p {
    text-align: left;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  @media ${device.tabletS} {
    & > h2 {
      text-align: center;
      color: var(--title);
    }
    & > p {
      padding: 0 1.25rem;
      text-align: center;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  min-width: 240px;
  height: 80px;
  background: var(--primary);

  @media ${device.tabletS} {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    max-width: 320px;
    min-width: 240px;
    height: 130px;
    background: var(--primary);
  }
`;

export const Image = styled.div`
  border-radius: 50%;
  background-image: url('../../../images/profile.png');
  background-position: 0 0;
  background-size: cover;

  border: 2px solid var(--background-profile-card);
  box-shadow: 0px 10px 20px -5px var(--pure-primary);
  min-width: 80px;
  height: 80px;
  z-index: 1;

  @media ${device.tabletS} {
    margin: -1rem auto 0 auto;
    border: 6px solid var(--background-profile-card);
    box-shadow: 0px 10px 20px -5px var(--pure-primary);
    width: 180px;
    height: 180px;
    z-index: 1;
  }
`;

export const ItemsContainer = styled.div`
  padding: 0 0.75rem;

  & > h3 {
    color: var(--title);
  }

  @media ${device.tabletS} {
    padding: 0 1.25rem;
  }
`;

export const ContactsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-evenly;
  list-style: none;
  padding: 0px 4px;
  margin: 0.5rem 0;

  flex-direction: row;

  @media ${device.tabletS} {
    flex-direction: column;
    gap: 0.5rem 0px;
    padding: 0px 0.5rem;
  }
`;

export const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 5px;
  margin-top: 8px;

  @media ${device.tabletS} {
    gap: 8px 10px;
    margin: 10px 8px;
  }
`;
