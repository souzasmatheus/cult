import styled from 'styled-components';

import { Avatar, ActionButton } from '../../atoms';

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

const StyledAvatar = styled(Avatar)``;

const StyledActionButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.grey.hammertime};
`;

export { Wrapper, StyledAvatar, StyledActionButton, LeftBorder };
