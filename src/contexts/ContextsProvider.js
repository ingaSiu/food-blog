import { PostsProvider } from './PostsContext';
import { CategoryProvider } from './CategoryContext';

const ContextsProvider = ({ children }) => {
  return (
    <CategoryProvider>
      <PostsProvider>{children}</PostsProvider>
    </CategoryProvider>
  );
};

export default ContextsProvider;
