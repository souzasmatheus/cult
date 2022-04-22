import './index.css';

import { ThemeProvider } from 'styled-components';

import theme from 'src/config/theme';

import { NavBar } from './components/common/organisms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: '1200px' }}>
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
