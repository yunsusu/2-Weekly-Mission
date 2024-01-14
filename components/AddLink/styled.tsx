import styled from "styled-components";
export const addLink = styled.form`
  max-width: 80rem;
  width: 100%;
  padding: 0 2rem;
  border-radius: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
`;
export const addInput = styled.input`
  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
`;
export const addButton = styled.button`
  width: 8rem;
  height: 3.7rem;
  font-size: 1.4rem;
  /* padding: 1rem 1.6rem; */
  border-radius: 0.8rem;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: #fff;
  cursor: pointer;
`;
