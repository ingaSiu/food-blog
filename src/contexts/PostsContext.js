import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3001/api/public/posts')
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Posts:', error);
      });
  }, []);
  return <PostsContext.Provider value={{ posts, isLoading }}>{children}</PostsContext.Provider>;
};

export { PostsContext, PostsProvider };
