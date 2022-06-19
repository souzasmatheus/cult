import './index.css';

import { ThemeProvider } from 'styled-components';

import { LongButton } from 'src/components/common/atoms';
import { HorizontalScroller } from 'src/components/common/molecules';
import { Container } from 'src/components/common/templates';
import theme from 'src/config/theme';

const userCultList = [
  {
    name: 'The High Collective of Shoe1',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe2',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe3',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe4',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe5',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe6',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
  {
    name: 'The High Collective of Shoe7',
    link: 'https://google.com',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HorizontalScroller
          data={userCultList}
          renderItem={({ name, link }) => (
            <LongButton key={name} onClick={() => window.open(link, '_self')}>
              {name}
            </LongButton>
          )}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
