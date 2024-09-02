import styled from "styled-components";

const StarRatingContainer = styled.div`
  display: block;
`;

interface RatingType {
  rating: number;
}

export const Rating = ({ rating }: RatingType) => {
  return (
    <>
      <StarRatingContainer>
        <div className="stars"></div>
        <div className="rating-number">{rating}</div>
      </StarRatingContainer>
    </>
  );
};
