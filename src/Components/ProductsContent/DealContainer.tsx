import styled from "styled-components";

const DealContainer = styled.div`
  display: flex;
`;

export const DealText = () => {
  return (
    <>
      <DealContainer>
        <div className="text-content">
          <div className="icon"></div>
          <span></span>
        </div>
      </DealContainer>
    </>
  );
};
