import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSIdeNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);

  return (
    <div>
      <h2 className="text-xl">Categories: {categories.length}</h2>
      {categories.map((category) => (
        <Link
          className="block text-left p-2 bg-slate-100 my-2 rounded-lg font-semibold text-xl hover:bg-black hover:text-white active:bg-black active:text-white duration-700"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
      
    </div>
  );
};

export default LeftSIdeNav;
