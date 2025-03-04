import { useEffect, useState } from 'react';
import { Category, getAllCategories } from '../../services/category-services';

const CategoriesPage = () => {
  const [category, setCategory] = useState<Category[]>([]);
  useEffect(() => {
    getAllCategories()
    .then((category) => setCategory(category))
    .catch((e) => console.log(e));
  }, []);

  console.log(category);
  return (
    <>
      <h1>All Categories Page</h1>
      <ul>
        {category.map((category) => (<li>{category.name}</li>))}
      </ul>
    </>
  );
};
export default CategoriesPage;
