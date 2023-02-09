import { SearchContainer, SearchInput } from './styles/SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <SearchContainer>
      <AiOutlineSearch />
      <SearchInput placeholder="Search for recipe"></SearchInput>
    </SearchContainer>
  );
};
export default SearchBar;
