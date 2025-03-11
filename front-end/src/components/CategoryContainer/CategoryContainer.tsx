import { Link } from "react-router";
import { Category } from "../../../services/category-services";
import "../CategoryContainer/CategoryContainer.css";

interface CategoryContainerProps {
  data: Category;
}

export default function CategoryContainer({ data }: CategoryContainerProps) {

  return (
    <button>
      <Link to={{ pathname: "/categories/" + `${data.id}` }}>
        <h3>{data.name}</h3>
      </Link>
    </button>
  );
}
