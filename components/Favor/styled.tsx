import styled from "styled-components";

export const shared = styled.div`
  padding: 9.4rem 0 6.24rem;
  margin-top: 9.4rem;
  text-align: center;
  background-color: var(--gray5);
`;
export const userimg = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  left: 50%;
  transform: translatex(-50%);
  & image {
    object-fit: cover;
  }
`;
export const pfirst = styled.p`
  font-size: 1.6rem;
  margin: 1rem auto 2rem;
`;
export const psecond = styled.p`
  font-size: 4rem;
`;
