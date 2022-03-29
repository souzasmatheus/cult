import { KeyboardEvent } from 'react';

import { Wrapper, Input, StyledMagnifierIcon } from './styled';
import { KeyboardEvent } from 'react';

type Props = {
  onSubmit: () => void;
  placeholderText: string;
};

const SearchBar = ({ onSubmit, placeholderText }: Props) => {
  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Wrapper>
      <Input onKeyPress={handleKeyPress} placeholder={placeholderText} />
      <StyledMagnifierIcon onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
