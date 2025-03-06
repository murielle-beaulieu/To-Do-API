import { Link } from "react-router";
import { Category } from "../../../services/category-services";
import "../CategoryContainer/CategoryContainer.css";

interface CategoryContainerProps {
  data: Category
}

export default function CategoryContainer({data}: CategoryContainerProps) {

// links to the todos and working on only displaying the todos of that category
// at the moment brings us to the todos page

  return (
    <button >
      <Link to={{pathname:"/todos/", search: `?category=${data.name}`}}>
        <h2>{data.name}</h2>
      </Link>
    </button>
  )
}
