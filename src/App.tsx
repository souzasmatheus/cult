import './index.css';

import { ThemeProvider } from 'styled-components';

import theme from 'src/config/theme';

import { NavBar } from './components/common/organisms';
import { Container, Border } from './components/common/templates';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Border>
        <Container>
          <NavBar />
        </Container>
      </Border>
    </ThemeProvider>
  );
}

export default App;
