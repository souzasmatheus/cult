import { FC } from 'react';

import { StyledButton } from './styled';

type Props = {
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
};

const LongButton: FC<Props> = ({
  children,
  onClick,
  isSelected,
  className,
}) => {
  return (
    <StyledButton {...{ onClick, isSelected, className }}>
      {children}
    </StyledButton>
  );
};

export default LongButton;
