import { ReactNode } from 'react';
import { StyledIcon, Wrapper, StyledCount } from './styled';

type Props = {
  counter?: number | string;
  icon: ReactNode;
  onPress: () => void;
};

const ActionButton = ({ counter, icon, onPress }: Props) => {
  return (
    <Wrapper>
      <StyledIcon onClick={onPress}>{icon}</StyledIcon>
      <StyledCount>{!counter ? 0 : counter}</StyledCount>
    </Wrapper>
  );
};

export default ActionButton;
