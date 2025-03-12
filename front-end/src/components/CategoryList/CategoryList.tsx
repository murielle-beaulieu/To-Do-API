import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import {
  Category,
  deleteCategory,
  editCategory,
} from "../../../services/category-services";
import "./CategoryList.css";
import CategoryForm from "../CategoryForm/CategoryForm";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { CategoryFormData } from "../CategoryForm/schema";

interface CategoryListProps {
  categories: Category[];
  onSearch: (category: string) => void;
}

export default function CategoryList({
  categories,
  onSearch,
}: CategoryListProps) {
  function deleting(id: string) {
    deleteCategory(id)
      .then()
      .catch((e) => console.log(e));
    window.location.reload();
  }
  const [categoryId, setCategoryId] = useState("");
  const [show, setShow] = useState(false);

  function editCategoryFormSubmit( data: CategoryFormData) {
    editCategory(categoryId, data)
      .then((category) => {
        console.log("category " + category.id + " has been updated");
      })
      .catch((e) => console.log(e));
  }

  function openModal(id:string) {
    setShow(!show);
    setCategoryId(id);
  }
  console.log(categoryId);

  return (
    <>
      <div className="list_container">
        <h2>Filter by categories</h2>
        {categories.map((category) => (
            <div className="btn_div" key={category.id}>
              <div>
              <button
                className="btn_category"
                onClick={() => onSearch(category.name)}
              >
                    </button>
                    </div>
                <h3>{category.name}</h3>
                <div>
                  <button className="btn_x" onClick={() => openModal(`${category.id}`)}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="btn_x"
                    onClick={() => deleting(`${category.id}`)}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </button>
            </div>
          </div>
        ))}
        {show && (
          <Modal>
            <CategoryForm
              onSubmit={editCategoryFormSubmit}
              title={"Edit"}
              existingValue={""}
            />
          </Modal>
        )}
        <div className="categories_options">
          <button onClick={() => onSearch("completed")} className="filter">
            <h3>See All Completed</h3>
          </button>
          <button onClick={() => onSearch("all")} className="filter">
            <h3>See All Active</h3>
          </button>
        </div>
      </div>
    </>
  );
}
