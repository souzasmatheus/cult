import { FC } from 'react';

import { FaSearch } from 'react-icons/fa';

import { Wrapper, Input, StyledMagnifierIcon } from './styled';

type Props = {
  onSubmit: () => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  return (
    <Wrapper>
      <Input />
      {/* <h1>SearchBar</h1>
      <FaSearch /> */}
      <StyledMagnifierIcon onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
