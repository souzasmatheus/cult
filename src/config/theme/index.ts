import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        mercury: string;
        mist: string;
        deepmist: string;
        rockport: string;
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
      mist: '#fafafa',
      deepmist: '#f0f0f0',
      rockport: '#b7b7b7',
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
