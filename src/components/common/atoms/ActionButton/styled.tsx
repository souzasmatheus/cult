import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.5rem;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  #kid {
    color: ${({ theme }) => theme.colors.black.default};
    width: 12px;
    padding-left: 1px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const StyledCount = styled.p`
  color: ${({ theme }) => theme.colors.black.default};
  font-size: small;
  padding-left: 1.7px;
  padding-top: 1px;
`;

export { StyledIcon, Wrapper, StyledCount };
