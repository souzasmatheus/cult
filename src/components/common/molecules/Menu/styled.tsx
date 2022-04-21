import styled from 'styled-components';
import { Avatar, ActionButton } from '../../atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  display: none;
`;

const StyledActionButton = styled(ActionButton)`
  color: blue;
  height: 300px;
`;

export { Wrapper, StyledAvatar, StyledActionButton };
