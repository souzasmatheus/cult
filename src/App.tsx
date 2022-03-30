import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton, ActionButton } from 'src/components/common/atoms/';
import { SearchBar } from 'src/components/common/molecules/';
import { FaHeart } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FiRefreshCcw } from 'react-icons/fi';
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
        icon={<FaHeart id="kid" />}
        counter="8"
      ></ActionButton>
      <ActionButton
        onPress={() => console.log('clicked ActionButton')}
        icon={<FiMessageSquare id="kid" />}
        counter="20"
      ></ActionButton>
      <ActionButton
        onPress={() => console.log('clicked ActionButton')}
        icon={<FiRefreshCcw id="kid" />}
        counter=""
      ></ActionButton>
    </ThemeProvider>
  );
}

export default App;
