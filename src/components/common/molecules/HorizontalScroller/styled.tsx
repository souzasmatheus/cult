import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
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
  scroll-behavior: smooth;
  border: 1px solid ${({ theme }) => theme.colors.grey.deepmist};
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0;
  }
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
const StyledLeftArrow = styled(BiLeftArrow)`
  font-size: 20px;
  position: absolute;
  top: 0;
  left: -5px;
  height: 100%;
  color: transparent;
  transition: 0.5s ease color;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.purple.scampi};
  }
`;

export { ItemWrapper, Wrapper, StyledRightArrow, StyledLeftArrow };
