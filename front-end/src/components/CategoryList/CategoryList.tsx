import { Category } from "../../../services/category-services";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import "./CategoryList.css";

interface CategoryListProps {
  data: Category[];
}

export default function CategoryList ({data}: CategoryListProps) {
  return (
    <div className="list_container">
      {data.map((category) => (
        <CategoryContainer data={category} />
      ))}
    </div>
  )
}
