import { useAllPostsQuery } from '../hooks/posts';
import { useState } from 'react';
import SearchBarInput from './SearchBarInput';
import { Popover } from 'react-tiny-popover';
import { generatePath, Link } from 'react-router-dom';
import { ContentContainer } from './styles/SearchBar.styled';
import { RECIPE_PAGE_PATH } from '../routes/const';
import styled from 'styled-components';
const SearchBarComponent = () => {
  const [search, setSearch] = useState('');
  const { data } = useAllPostsQuery();
  const recipes = data || [];

  const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Popover
      isOpen={search}
      positions={['top', 'bottom', 'left', 'right']}
      onClickOutside={() => setSearch('')}
      content={
        <ContentContainer>
          {filteredRecipes.length ? (
            filteredRecipes.map((recipe) => (
              <p key={recipe._id} onClick={() => setSearch('')}>
                <Link to={generatePath(RECIPE_PAGE_PATH, { recipeId: recipe._id })}>{recipe.title}</Link>
              </p>
            ))
          ) : (
            <p>Recipe not found</p>
          )}
        </ContentContainer>
      }
    >
      <div>
        <SearchBarInput value={search} setValue={setSearch} />
      </div>
    </Popover>
  );
};

export default SearchBarComponent;
