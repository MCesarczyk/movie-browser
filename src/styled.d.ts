import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      blue: string;
      cornflowerBlue: string;
      mineShaft: string;
      scienceBlue: string;
      mystic: string;
      mercury: string;
      woodsmoke: string;
      stormGrey: string;
      darkGrey: string;
      black: string;
      whisper: string;
    };
    breakpoint: {
      mediumScreen: string;
      smallScreen: string;
      mobileMax: string;
      oldIphone: string;
      mobileMin: string;
    };
    dimension: {
      maxWidth: string;
    };
  }

  export interface ThemeType {
    fontFamily: string;
    backgroundColor: string;
    minWidth: string;
    overflowWrap: string;
    overflowY: string;
    width: string;
  }
}
