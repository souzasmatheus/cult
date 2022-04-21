import { IconType } from 'react-icons/lib';

import { Wrapper, StyledCount, StyledIcon } from './styled';

type Props = {
  counter?: number | string;
  icon: IconType;
  onClick: () => void;
};

const ActionButton = ({ counter, icon, onClick }: Props) => {
  return (
    <Wrapper>
      <StyledIcon Icon={icon} onClick={onClick} />
      <StyledCount>{counter ?? null}</StyledCount>
    </Wrapper>
  );
};

export default ActionButton;
