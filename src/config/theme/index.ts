import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        mercury: string;
        mist: string;
        deepmist: string;
        rockport: string;
        hammertime: string;
      };
      white: {
        default: string;
      };
      purple: {
        scampi: string;
      };
      black: {
        default: string;
        shadowBlack: string;
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
      hammertime: '#757575',
    },
    white: {
      default: '#ffffff',
    },
    purple: {
      scampi: '#6962A7',
    },
    black: {
      default: '#000000',
      shadowBlack: 'rgba(0, 0, 0, 0.1)',
    },
  },
};

export default theme;
