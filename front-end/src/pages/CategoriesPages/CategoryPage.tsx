import { useEffect, useState } from 'react';
import { Category, getCategory} from '../../../services/category-services';
import { useParams } from 'react-router';

const CategoryPage = () => {
  const {id = 'x'} = useParams();
  const [category, setCategory] = useState<Category | null>();

  useEffect(() => {
    getCategory(id)
    .then((category) => setCategory(category))
    .catch((e) => console.log(e));
  }, [id]);

  console.log(category);
  return (
    <>
      <h1>Category Page</h1>
    </>
  );
};
export default CategoryPage;
