import { IconType } from 'react-icons/lib';

import { Wrapper, StyledCount, StyledIcon } from './styled';

type Props = {
  counter?: number | string;
  icon: IconType;
  onClick: () => void;
  className?: string;
  iconSize?: number | string;
};

const ActionButton = ({
  counter,
  icon,
  onClick,
  className,
  iconSize = 12,
}: Props) => {
  return (
    <Wrapper>
      <StyledIcon
        size={iconSize}
        Icon={icon}
        onClick={onClick}
        className={className}
      />
      <StyledCount className={className}>{counter}</StyledCount>
    </Wrapper>
  );
};

export default ActionButton;
