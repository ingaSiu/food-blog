import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContainer, SearchInput } from './styles/SearchBar.styled';

const SearchBarInput = ({ value, setValue }) => {
  return (
    <SearchContainer>
      <AiOutlineSearch />
      <SearchInput
        placeholder="Search for recipe"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></SearchInput>
    </SearchContainer>
  );
};
export default SearchBarInput;
