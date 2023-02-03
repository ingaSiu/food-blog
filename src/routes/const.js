import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import RecipePage from '../pages/RecipePage';

export const HOME_PATH = '/';
export const ABOUT_ME_PATH = `${HOME_PATH}about`;
export const RECIPE_PAGE_PATH = `${HOME_PATH}:recipeId`;

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: ABOUT_ME_PATH,
    Component: AboutMe,
  },
  {
    path: RECIPE_PAGE_PATH,
    Component: RecipePage,
  },
];
