import { useNavigate } from "react-router-dom";
import { menuItems } from "../../data/Constances";

const MenuItem = () => {
  const navigate = useNavigate();
  const handleNavigate = (item: string) => {
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <div className={`w-full lg:w-auto lg:block`}>
      <ul
        className="lg:space-x-8 flex flex-col 
           bg-gray-50 text-2xl border border-gray-100 rounded-lg
            p-4 lg:bg-transparent lg:border-none lg:dark:text-white"
      >
        {menuItems.map((menu, index) => {
          return (
            <li
              onClick={() => handleNavigate(menu)}
              className={`
                  lg:hover:text-purple-600
                  lg:hover:bg-transparent
                  rounded cursor-pointer py-2 px-3 font-afsaneh
                  ${
                    index === 0
                      ? "bg-blue-500 lg:bg-transparent text-white lg:text-blue-500 "
                      : "hover:bg-gray-100"
                  } `}
              key={menu}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
