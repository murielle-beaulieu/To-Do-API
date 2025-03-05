import { Link } from "react-router";
import { Category } from "../../../services/category-services";
import "../CategoryContainer/CategoryContainer.css";

interface CategoryContainerProps {
  data: Category
}

export default function CategoryContainer({data}: CategoryContainerProps) {
  return (
    <section>
      <Link to={{pathname:"/filtered", search: `?category=${data.name}`}}>
        <h2>{data.name}</h2>
      </Link>
    </section>
  )
}
