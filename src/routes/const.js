import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import RecipePage from '../pages/RecipePage';
import Travel from '../pages/Travel';
import Category from '../pages/Category';
import MainLayout from '../layouts/MainLayout';

export const HOME_PATH = '/';
export const RECIPE_PAGE_PATH = `${HOME_PATH}post/:recipeId`;
export const CATEGORY_PAGE_PATH = `${HOME_PATH}category/:categoryId`;
export const TRAVEL_PATH = `${HOME_PATH}travel`;
export const ABOUT_ME_PATH = `${HOME_PATH}about`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
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
    {
      path: TRAVEL_PATH,
      Component: Travel,
    },
    {
      path: CATEGORY_PAGE_PATH,
      Component: Category,
    },
  ],
};
