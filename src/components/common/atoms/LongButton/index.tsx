import { FC } from 'react';

import { StyledButton } from './styled';

type Props = {
  onClick: () => void;
  isSelected?: boolean;
};

const LongButton: FC<Props> = ({ children, onClick, isSelected }) => {
  return <StyledButton {...{ onClick, isSelected }}>{children}</StyledButton>;
};

export default LongButton;
