import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const StyledMagnifierIcon = styled(FaSearch).attrs({})`
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  color: ${({ theme }) => theme.colors.grey.rockport};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey.mist};
  width: 15rem;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.grey.deepmist};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Input = styled.input<{ foo?: string }>`
  width: 80%;
  height: 90%;
  border: none;
  background: ${({ theme }) => theme.colors.grey.mist};
  color: ${({ theme }) => theme.colors.grey.rockport};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey.rockport};
  }
`;

export { Wrapper, Input, StyledMagnifierIcon };
