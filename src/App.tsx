import './index.css';

import { ThemeProvider } from 'styled-components';
import { Menu } from './components/common/molecules';

import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
