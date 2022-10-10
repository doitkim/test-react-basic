import { Link } from "react-router-dom";
import "./Category.css";
const MenuList = () => {
  return (
    <div className="Category">
      <h1>카테고리</h1>
      <li>
        <Link to="/1">상품 분류 1</Link>
      </li>
      <li>
        <Link to="/2">상품 분류 2</Link>
      </li>

      <li>
        <Link to="/3">상품 분류 3</Link>
      </li>
      <li>
        <Link to="/4">상품 분류 4</Link>
      </li>
    </div>
  );
};

export default MenuList;
