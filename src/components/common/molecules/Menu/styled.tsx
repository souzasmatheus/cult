import styled from 'styled-components';

import { Avatar, ActionButton } from '../../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 7%;
  justify-content: space-between;
`;

const StyledAvatar = styled(Avatar)``;

const StyledActionButton = styled(ActionButton)``;

export { Wrapper, StyledAvatar, StyledActionButton };
