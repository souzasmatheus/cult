import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton } from 'src/components/common/atoms/';
import SearchBar from 'src/components/common/molecules/SearchBar/index';
import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchBar />
      <LongButton onClick={() => null}>Example</LongButton>
    </ThemeProvider>
  );
}

export default App;
