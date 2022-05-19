import './index.css';

import { ThemeProvider } from 'styled-components';

import { HorizontalScroller } from 'src/components/common/molecules';
import { Container } from 'src/components/common/templates';
import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HorizontalScroller />
      </Container>
    </ThemeProvider>
  );
}

export default App;
