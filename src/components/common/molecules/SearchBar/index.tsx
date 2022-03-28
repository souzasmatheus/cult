import { Wrapper, Input, StyledMagnifierIcon } from './styled';

type Props = {
  onSubmit: () => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  return (
    <Wrapper>
      <Input />
      <StyledMagnifierIcon onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
