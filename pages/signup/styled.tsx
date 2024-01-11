import styled from "styled-components";

export const signUp = styled.div`
  background-color: var(--gray5);
`;
export const login = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--black);
  & > h1 {
    text-align: center;
  }
`;
export const signTop = styled.div`
  width: 100%;
`;
