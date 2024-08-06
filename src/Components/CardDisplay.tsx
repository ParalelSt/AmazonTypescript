import { CardDisplayContainer } from "./CardDisplay.styled";

function CardDisplay() {
  const images = [
    {
      image: "Toys.png",
      title: "Toys & Games",
      id: 2,
      buttonText: "See more",
    },

    {
      image: "Home.png",
      title: "Home & Kitchen",
      id: 1,
      buttonText: "See more",
    },

    {
      image: "AmazonBasics.png",
      title: "Amazon Basics",
      id: 3,
      buttonText: "Discover now",
    },
  ];

  return (
    <CardDisplayContainer>
      {images.map((img) => (
        <div className="card-container" key={img.id}>
          <div className="card-title">
            <span>{img.title}</span>
          </div>
          <div className="card-image">
            <img src={img.image} />
          </div>
          <div className="card-button">
            <span>{img.buttonText}</span>
          </div>
        </div>
      ))}

      <div className="card-container sign-in-container">
        <div className="card-title">
          <span>Sign in for your best experience</span>
        </div>
        <div className="card-content">
          <button>Sign in securely</button>
        </div>
      </div>
    </CardDisplayContainer>
  );
}

export default CardDisplay;
