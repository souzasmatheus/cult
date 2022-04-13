import './index.css';

import { ThemeProvider } from 'styled-components';

import theme from 'src/config/theme';

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
