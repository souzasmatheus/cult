import './index.css';

import { ThemeProvider } from 'styled-components';

import { DropdownMenu } from 'src/components/common/atoms';
import { Container } from 'src/components/common/templates';
import theme from 'src/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
