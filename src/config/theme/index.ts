import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        mercury: string;
      };
      white: {
        default: string;
      };
      purple: {
        scampi: string;
      };
      black: {
        default: string;
      };
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    grey: {
      mercury: '#e6e6e6',
    },
    white: {
      default: '#ffffff',
    },
    purple: {
      scampi: '#6962A7',
    },
    black: {
      default: '#000000',
    },
  },
};

export default theme;
