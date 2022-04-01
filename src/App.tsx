import './index.css';

import { FiMessageSquare } from 'react-icons/fi';
import { ThemeProvider } from 'styled-components';

import { LongButton, ActionButton } from 'src/components/common/atoms/';
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
      <ActionButton
        onPress={() => console.log('clicked ActionButton')}
        icon={FiMessageSquare}
        counter="8"
      />
    </ThemeProvider>
  );
}

export default App;
