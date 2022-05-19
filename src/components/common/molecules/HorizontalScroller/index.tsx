import { Wrapper, StyledLongButton } from './styled';

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
];

const HorizontalScroller = () => {
  return (
    <Wrapper>
      {userCultList.map((item) => {
        const { name, link } = item;
        return (
          <StyledLongButton
            key={name}
            onClick={() => window.open(link, '_self')}
          >
            {name}
          </StyledLongButton>
        );
      })}
    </Wrapper>
  );
};

export default HorizontalScroller;
