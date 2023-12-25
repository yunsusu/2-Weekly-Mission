import styled from "styled-components";

export const header = styled.div`
  width: 100%;
  height: 9.4rem;
  background-color: var(--gray5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;
export const header_inner = styled.div`
  width: 100%;
  max-width: 152rem;
  padding: 0 20rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 1199px) {
    padding: 0 3.2rem;
    max-width: 79.9rem;
  }
`;
export const h1 = styled.h1`
  width: 13.3rem;
  height: 2.4rem;
  font-size: 2.4rem;
  color: var(--blue);
`;
export const logo = styled.img`
  width: 100%;
`;
export const userdata = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
`;
export const userimg = styled.img`
  border-radius: 20rem;
  width: 2.8rem;
  height: 2.8rem;
`;
export const login = styled.div`
  text-align: center;
  line-height: 5.4rem;
  width: 12.8rem;
  height: 5.4rem;
  font-size: 1.8rem;
  color: var(--gray5);
  border-radius: 0.8rem;
  background: linear-gradient(90deg, var(--blue) 0%, #6ae3fe 100%);
  @media all and (max-width: 767px) {
    width: 8rem;
    line-height: 3.7rem;
    height: 3.7rem;
    font-size: 1.4rem;
  }
`;
