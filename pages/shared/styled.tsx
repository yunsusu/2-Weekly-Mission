import styled from "styled-components";
export const shared = styled.div`
  padding: 9.4rem 0 6.24rem;
  margin-top: 9.4rem;
  text-align: center;
  background-color: var(--gray5);
`;
export const cardBox = styled.div`
  max-width: 106rem;
  margin: 0 auto 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 3.2rem;
  @media all and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
