import styled from 'styled-components';

import { CustomIcon } from 'src/components/common/atoms';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.5rem;
`;

const StyledIcon = styled((props) => <CustomIcon {...props} />).attrs({
  size: 12,
})`
  cursor: pointer;
  padding-left: 1px;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledCount = styled.p`
  color: ${({ theme }) => theme.colors.black.default};
  font-size: small;
  padding-left: 1.7px;
  padding-top: 1px;
`;

export { StyledIcon, Wrapper, StyledCount };
