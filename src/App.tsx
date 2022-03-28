import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton } from 'src/components/common/atoms/';
import { SearchBar } from 'src/components/common/molecules/';
import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchBar
        placeholderText="Search"
        onSubmit={() => console.log('submitted')}
      />
      <LongButton onClick={() => null}>Example</LongButton>
    </ThemeProvider>
  );
}

export default App;
