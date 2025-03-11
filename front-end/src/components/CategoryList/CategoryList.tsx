import { Category } from "../../../services/category-services";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import "./CategoryList.css";

interface CategoryListProps {
  data: Category[];
}

export default function CategoryList ({data}: CategoryListProps) {
  return (
    <div className="list_container">
      <h2>Filter by categories</h2>
      {data.map((category) => (
        <CategoryContainer data={category} key={category.id} />
      ))}
    </div>
  )
}
