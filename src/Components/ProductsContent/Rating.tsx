import styled from "styled-components";

const StarRatingContainer = styled.div`
  display: block;
`;

export const Rating = ({ rating }) => {
  return (
    <>
      <StarRatingContainer>
        <div className="stars"></div>
        <div className="rating-number">{rating}</div>
      </StarRatingContainer>
    </>
  );
};
