import { IconType } from 'react-icons/lib';

import { Wrapper, StyledCount, StyledIcon } from './styled';

type Props = {
  counter?: number | string;
  icon: IconType;
  onPress: () => void;
};

const ActionButton = ({ counter, icon, onPress }: Props) => {
  return (
    <Wrapper>
      <StyledIcon Icon={icon} onClick={onPress} />
      <StyledCount>{!counter ? 0 : counter}</StyledCount>
    </Wrapper>
  );
};

export default ActionButton;
