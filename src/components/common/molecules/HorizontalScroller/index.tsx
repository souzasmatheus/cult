import { ReactNode, useRef } from 'react';

import {
  ItemWrapper,
  Wrapper,
  StyledRightArrow,
  StyledLeftArrow,
} from './styled';

type Props<T> = {
  data: T[];
  renderItem: (item: T) => ReactNode;
};

const HorizontalScroller = <T extends object>({
  data,
  renderItem,
}: Props<T>) => {
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
        {data.map((item) => renderItem(item))}
      </ItemWrapper>
      <StyledRightArrow onClick={scrollRight} />
    </Wrapper>
  );
};

export default HorizontalScroller;
