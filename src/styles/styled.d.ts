import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      background: string;
      background_md_image: string;
      background_profile_card: string;
      primary: string;
      pure_primary: string;
      secondary: string;
      shadow: string;

      title: string;
      text: string;
      text_inverse: string;
    };
  }
}
