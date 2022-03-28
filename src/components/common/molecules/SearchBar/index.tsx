import { Wrapper, Input, StyledMagnifierIcon } from './styled';

type Props = {
  onSubmit: () => void;
  placeholderText: string;
};

const SearchBar = ({ onSubmit, placeholderText }: Props) => {
  return (
    <Wrapper>
      <Input
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
        placeholder={placeholderText}
      />
      <StyledMagnifierIcon onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
