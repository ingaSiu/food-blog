import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import RecipePage from '../pages/RecipePage';
import Travel from '../pages/Travel';
import Category from '../pages/CategoryPage';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import AdminPosts from '../pages/Admin/AdminPosts';
import AdminComments from '../pages/Admin/AdminComments';
import AdminCategories from '../pages/Admin/AdminCategories';
export const HOME_PATH = '/';
export const RECIPE_PAGE_PATH = `${HOME_PATH}post/:recipeId`;
export const CATEGORY_PAGE_PATH = `${HOME_PATH}category/:categoryId`;
export const TRAVEL_PATH = `${HOME_PATH}travel`;
export const ABOUT_ME_PATH = `${HOME_PATH}about`;

export const ADMIN_LOGIN_PATH = `${HOME_PATH}admin/login`;
export const ADMIN_POSTS_PATH = `${HOME_PATH}admin/posts`;
export const ADMIN_COMMENTS_PATH = `${HOME_PATH}admin/comments`;
export const ADMIN_CATEGORIES_PATH = `${HOME_PATH}admin/categories`;

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

export const adminLayoutRoutes = {
  AdminLayout: AdminLayout,
  adminRoutes: [
    {
      path: ADMIN_POSTS_PATH,
      Component: AdminPosts,
    },
    {
      path: ADMIN_CATEGORIES_PATH,
      Component: AdminCategories,
    },
    {
      path: ADMIN_COMMENTS_PATH,
      Component: AdminComments,
    },
  ],
};
