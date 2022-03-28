import { Wrapper, Input, StyledMagnifierIcon } from './styled';

type Props = {
  onSubmit: () => void;
  placeholderText: string;
};

const SearchBar = ({ onSubmit, placeholderText }: Props) => {
  return (
    <Wrapper>
      <Input placeholder={placeholderText} />
      <StyledMagnifierIcon onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
