import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.5rem;
`;

const StyledIcon = styled(FaHeart)`
  color: ${({ theme }) => theme.colors.black.default};
  width: 40%;
`;

const StyledCount = styled.p`
  color: ${({ theme }) => theme.colors.black.default};
  font-size: small;
  padding-left: 2px;
  padding-top: 1px;
`;

export { StyledIcon, Wrapper, StyledCount };
