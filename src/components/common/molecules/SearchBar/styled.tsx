import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const StyledMagnifierIcon = styled(FaSearch).attrs({})`
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey.mercury};
  width: 13rem;
  height: 2rem;
  border: 2px solid black;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Input = styled.input<{ foo?: string }>`
  width: 80%;
  height: 90%;
  border: none;
  background: ${({ theme }) => theme.colors.grey.mercury};

  &:focus {
    outline: none;
  }
`;

export { Wrapper, Input, StyledMagnifierIcon };
