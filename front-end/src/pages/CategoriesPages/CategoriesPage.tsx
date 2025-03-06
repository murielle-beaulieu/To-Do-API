import { useEffect, useState } from 'react';
import { Category, getAllCategories } from '../../../services/category-services';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
    .then((categories) => setCategories(categories))
    .catch((e) => console.log(e));
  }, []);



  console.log(categories);
  return (
    <>
      <h1>All Categories Page</h1>
      {categories.map((category) => (<CategoryContainer data={category}/>))}
    </>
  );
};
export default CategoriesPage;
