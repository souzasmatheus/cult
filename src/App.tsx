import './index.css';

import { ThemeProvider } from 'styled-components';

import theme from 'src/config/theme';

import { Container } from './components/common/templates';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>HELLO</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
