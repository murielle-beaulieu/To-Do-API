import { createCategory } from "../../../services/category-services"
import { CategoryFormData } from "../../components/CategoryForm/schema";
import CategoryForm from "../../components/CategoryForm/CategoryForm";

export default function NewCategoryPage() {
  const onSubmit = (data: CategoryFormData) => {
    createCategory(data)
    .then((category) => {
      console.log('created ' + category.name)
    })
    .catch((e) => console.log(e));
  }
  return(
    <>
      <h1>New Category Page</h1>
      <CategoryForm onSubmit={onSubmit}/>
    </>
  )
}
