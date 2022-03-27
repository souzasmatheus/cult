import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = {};

const SearchBar: FC<Props> = () => {
  return (
    <div>
      <h1>SearchBar</h1>
      <FaSearch />
    </div>
  );
};

export default SearchBar;
