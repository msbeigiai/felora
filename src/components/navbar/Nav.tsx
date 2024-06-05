import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  onClickShoppingButton: () => void;
}

const Nav = ({ onClickShoppingButton }: Props) => {
  const navigate = useNavigate();
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#ffffff36] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div
          className="button-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
          onClick={onClickShoppingButton}
        >
          <div className="flex-center rounded-full bg-white shadow-md h-12 w-12 cursor-pointer">
            <IconButton>
              <MenuIcon sx={{ fontSize: "2.2rem", fontWeight: "700" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          className="font-brittany logo font-semibold text-4xl list-none"
          onClick={() => navigate("/")}
        >
          Faeze Abbaspour
        </li>
      </div>

      <Button
        variant="contained"
        sx={{
          background: "#c776df",
          borderRadius: 100,
          color: "#000",
          py: 1,
          fontFamily: "afsaneh",
          fontSize: 20,
          ":hover": {
            bgcolor: "#bb6fd2",
            color: "white",
          },
        }}
      >
        ورود / ثبت نام
      </Button>
    </Box>
  );
};

export default Nav;
