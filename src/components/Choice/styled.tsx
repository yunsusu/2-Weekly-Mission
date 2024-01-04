import styled from "styled-components";
export const choiceBtn = styled.button`
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  cursor: pointer;
  /* &:hover {
    background-color: var(--blue);
    color: #fff;
  } */
`;
export const choiceBtnWrap = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 106rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  flex-wrap: wrap;
`;
