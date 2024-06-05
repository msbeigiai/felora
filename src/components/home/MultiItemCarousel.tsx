import Slider from "react-slick";
import CourseCarousel from "../courses/CourseCarousel";
import mockCourses from "../../data/Constances";

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {mockCourses.map((course) => (
          <CourseCarousel key={course.id} course={course} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
