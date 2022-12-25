import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

import { useThemes } from '../../hooks/useTheme';
import { ThemeSwitchContainer } from './styles';

export function ThemeSwitch() {
  const { selectedTheme, changeTheme } = useThemes();
  const isLight = selectedTheme.name === 'light';

  return (
    <ThemeSwitchContainer>
      {!isLight && <HiOutlineMoon size={25} onClick={() => changeTheme('light')} />}
      {isLight && <HiOutlineSun size={25} onClick={() => changeTheme('dark')} />}
    </ThemeSwitchContainer>
  );
}
