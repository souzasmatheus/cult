import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton, ActionButton } from 'src/components/common/atoms/';
import { SearchBar } from 'src/components/common/molecules/';
import { FaHeart } from 'react-icons/fa';
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
        icon={<FaHeart />}
        counter="8"
        iconProp="FaHeart"
      ></ActionButton>
    </ThemeProvider>
  );
}

export default App;
