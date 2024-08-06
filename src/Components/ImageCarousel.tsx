import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      img: "PrimeMemberExclusive.png",
      alt: "exclusive for prime members",
      id: 1,
    },

    {
      img: "Electronics.png",
      alt: "shop for electronics",
      id: 2,
    },

    {
      img: "FashionRelated.png",
      alt: "explore new arrivals in Fashion",
      id: 3,
    },
  ];

  return (
    <div className="image-container">
      <Slider {...settings}>
        {data.map((item) => (
          <img src={item.img} alt={item.alt} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
