import { ContentContainer } from "./Content.styled";
import ImageCarousel from "./ImageCarousel";
import { Products } from "./Products";
import CardDisplay from "./CardDisplay";

function Content() {
  return (
    <>
      <ContentContainer>
        <div className="content-container">
          <div className="upper">
            <ImageCarousel></ImageCarousel>
          </div>
          <div className="lower">
            <CardDisplay></CardDisplay>
            <Products></Products>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}

export default Content;
