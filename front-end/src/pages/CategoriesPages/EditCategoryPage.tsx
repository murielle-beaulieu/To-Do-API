import { useParams } from "react-router";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { editCategory } from "../../../services/category-services";
import { CategoryFormData } from "../../components/CategoryForm/schema";

export default function EditCategoryPage(){
  const {id} = useParams<{id: string}>();

  const onSubmit = (data: CategoryFormData) => {
      if(id){
        editCategory(id, data)
        .then((category) => {
          console.log('category ' + category.name + ' has been updated');
        }).catch((e) => console.log(e));
      }
    };

    return (
      <>
        <h1>Edit Category Page</h1>
        <CategoryForm onSubmit={onSubmit} id={id}/>
      </>
    )
}
