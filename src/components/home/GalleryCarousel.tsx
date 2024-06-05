import Slider from "react-slick";
import galleries from "../../data/Gallery";

const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {galleries.map((gallery) => (
          <div className="flex justify-between items-center p-5">
            <img
              src={gallery.src}
              key={gallery.id}
              className="w-[25rem] h-[25rem] border-[#f2f1eb] bg-[#f2f1eb] border-4 pt-3 pl-3 pr-3 pb-20"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryCarousel;
