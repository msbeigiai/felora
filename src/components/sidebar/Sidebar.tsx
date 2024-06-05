import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ReactElement } from "react";
import "./Sidebar.css";

interface Props {
  children: ReactElement;
  isOpen: boolean;
  onClickClose: () => void;
}

const Sidebar = ({ children, isOpen, onClickClose }: Props) => {
  return (
    <div>
      <div
        className={`overflow-y-auto p-5 z-50 h-full w-full shadow-lg md:w-[50%] lg:w-[35%]
   fixed top-0 right-0 transition transform duration-300 sidebar
${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <IconButton
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2
          text-black font-bold cursor-pointer rounded-full border border-gray-300 dark:text-white"
        >
          <CloseIcon sx={{ fontSize: "2.2rem", fontWeight: "700" }} />
        </IconButton>
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full
       bg-black opacity-50 translate transition"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
