import { Outlet } from 'react-router-dom';

import NavBarComponent from '../NavBar';
import ProfileCard from '../ProfileCard';
import * as S from './styles';

function Layout() {
  return (
    <S.LayoutContainer>
      <ProfileCard />
      <S.ContentContainer>
        <NavBarComponent />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.ContentContainer>
    </S.LayoutContainer>
  );
}

export default Layout;
