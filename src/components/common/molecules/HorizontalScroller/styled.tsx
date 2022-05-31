import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import styled from 'styled-components';

import { LongButton } from 'src/components/common/atoms';

const Wrapper = styled.div`
  position: relative;
  // border: 1px solid ${({ theme }) => theme.colors.grey.deepmist};
  padding: 1rem;
  width: 37.6%;
  margin: auto;
`;

const ItemWrapper = styled.div`
  max-height: 120px;
  max-width: 100%;
  display: flex;
  padding: 7px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  border: 1px solid ${({ theme }) => theme.colors.grey.deepmist};
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0;
  }
`;

const StyledLongButton = styled(LongButton)`
  margin-right: 10px;
`;

const StyledRightArrow = styled(BiRightArrow)`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: -5px;
  height: 100%;
  color: transparent;
  transition: 0.5s ease color;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.purple.scampi};
  }
`;

export { ItemWrapper, StyledLongButton, Wrapper, StyledRightArrow };
