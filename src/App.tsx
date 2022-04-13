import './index.css';

import { ThemeProvider } from 'styled-components';
import { Avatar } from './components/common/atoms';

import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Avatar
        handleClick={() => console.log('clicked')}
        pic="https://i.kym-cdn.com/photos/images/original/002/128/532/e7c.jpg"
      />
    </ThemeProvider>
  );
}

export default App;
