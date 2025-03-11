import { useEffect, useState } from "react";
import {
  Category,
  deleteCategory,
  getCategory,
} from "../../../services/category-services";
import { useNavigate, useParams } from "react-router";

const CategoryPage = () => {
  const { id = "x" } = useParams();
  const [category, setCategory] = useState<Category | null>();
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(id)
      .then((category) => setCategory(category))
      .catch((e) => console.log(e));
  }, [id]);

  function onClick() {
    console.log("deleted");
    deleteCategory(`${category?.id}`)
      .then()
      .catch((e) => console.log(e));
  }

  return (
    <>
      <h1>Category Page</h1>
      <h2>{category?.name}</h2>
      <button onClick={() => onClick()}>delete</button>
    </>
  );
};
export default CategoryPage;
