import styled from 'styled-components';

import { DropdownMenu, ActionButton } from 'src/components/common/atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 43%;
`;

const LeftBorder = styled.div`
  height: 50px;
  margin-right: 5px;
  border-left: solid 1px ${({ theme }) => theme.colors.grey.mercury};
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  left: 0px;
  top: 110%;
`;

const StyledActionButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.grey.hammertime};
`;

export {
  Wrapper,
  StyledActionButton,
  LeftBorder,
  DropdownWrapper,
  StyledDropdownMenu,
};
