import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const StyledMagnifierIcon = styled(FaSearch).attrs({
  size: 20,
})`
  cursor: pointer;
  color: green;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

  &:focus {
    outline: none;
  }
`;

export { Wrapper, Input, StyledMagnifierIcon };
