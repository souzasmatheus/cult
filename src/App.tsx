import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton } from 'src/components/common/atoms';
import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LongButton onClick={() => null}>Example</LongButton>
    </ThemeProvider>
  );
}

export default App;
