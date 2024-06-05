import { Button } from "@mui/material";

interface Props {
  course: { title: string; image: string; price: number };
}

const CourseCarousel = ({ course }: Props) => {
  const modifiedPrice = new Intl.NumberFormat("en-US").format(course.price);
  return (
    <div className="flex flex-col justify-center items-center px-4 course-cart">
      <img
        src={course.image}
        className="w-[10rem] h-[10rem] lg:h-[30rem] lg:w-[30rem] rounded-full object-center border-[#7da8bf] border-4"
        alt={course.title}
      />
      <Button
        variant="contained"
        sx={{
          background: "#a0fd2a",
          borderRadius: 100,
          color: "#000",
          fontFamily: "afsaneh",
          mt: 3,
          fontSize: 45,
          ":hover": {
            bgcolor: "#a0fd2c",
            color: "#000",
          },
        }}
      >
        {course.title}
      </Button>
      <span className="py-5 font-semibold text-xl text-gray font-afsaneh">
        {modifiedPrice} تومان
      </span>
    </div>
  );
};

export default CourseCarousel;
