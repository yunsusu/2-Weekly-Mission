import styled from "styled-components";

export const search = styled.form`
  max-width: 106rem;
  padding: 0 3.2rem;
  text-align: center;
  margin: 2rem auto;
`;
export const searchInner = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: #f5f5f5;
  display: flex;
  gap: 1rem;
`;
export const button = styled.button`
  cursor: pointer;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 2rem;
`;
export const input = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  &::placeholder {
    margin-left: 10px;
  }
`;
