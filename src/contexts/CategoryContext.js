import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/public/categories')
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Categories:', error);
      });
  }, []);
  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>;
};
export { CategoryContext, CategoryProvider };
