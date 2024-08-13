import styled from "styled-components";

export const CartNavContainer = styled.div`
  display: flex;
  background-color: #fafafa;
  width: 100%;
  padding-top: 0.2em;
  padding-bottom: 0.1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .nav-container {
    padding: 0.2em 0;
    margin-left: 1.5em;

    .home-page {
      font-weight: bold;
    }

    a {
      font-size: 0.75em;
      padding: 0.2em 0.7em;
    }

    a:visited,
    a {
      color: black;
    }
  }
`;
