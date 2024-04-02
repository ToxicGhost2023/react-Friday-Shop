import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";
import styles from "./SideBard.module.css";

const category = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

const SideBar = ({ setQuery, query }) => {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {category.map((i) => (
          <li
            key={i.id}
            className={
              i.type.toLowerCase() === query.category ? styles.selected : null
            }
          >
            {i.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
