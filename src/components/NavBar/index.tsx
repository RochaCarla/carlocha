import { pages } from '../../../markdowns/index';
import * as S from './styles';

function NavBarComponent() {
  return (
    <S.NavBarContainer>
      {pages.map((page) => (
        <S.Link
          key={page.name}
          to={page.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {page.name}
        </S.Link>
      ))}
    </S.NavBarContainer>
  );
}

export default NavBarComponent;
