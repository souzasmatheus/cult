import { MutableRefObject, useRef } from 'react';

import {
  ItemWrapper,
  StyledLongButton,
  Wrapper,
  StyledRightArrow,
  StyledLeftArrow,
} from './styled';

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

const HorizontalScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft + 350;
    }
  };

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft - 350;
    }
  };

  return (
    <Wrapper>
      <StyledLeftArrow onClick={scrollLeft} />
      <ItemWrapper ref={scrollerRef}>
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
      </ItemWrapper>
      <StyledRightArrow onClick={scrollRight} />
    </Wrapper>
  );
};

export default HorizontalScroller;
