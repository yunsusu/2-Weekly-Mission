import styled from "styled-components";
export const Main = styled.div`
  padding: 9.4rem 3.2rem 6.24rem 3.2rem;
  text-align: center;
  background-color: var(--gray5);
`;
export const BotMain = styled.div`
  width: 100%;
  padding: 2.4rem 3.2rem;
  text-align: center;
  background-color: var(--gray5);
  position: fixed;
  bottom: 0;
  z-index: 10;
  @media all and (max-width: 767px) {
    display: none;
  }
`;
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

export const cardTitle = styled.div`
  max-width: 106rem;
  width: 100%;
  padding: 0 3.2rem;
  display: flex;
  justify-content: space-between;
  margin: 2.4rem auto;
`;
export const cardTitleH2 = styled.h2`
  font-size: 24px;
`;
export const cardTitleBtn = styled.button`
  font-size: 1.4rem;
  color: var(--gray2);
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* @media all and (max-width: 767px) {
    display: none;
  } */
`;
export const cardTitleBtnBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
export const noData = styled.div`
  display: flex;
  max-width: 1060px;
  min-height: 20rem;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin: 0 auto;
`;
export const folderFAB = styled.button`
  display: none;
  padding: 0.8rem 2.4rem;
  border-radius: 20px;
  background: var(--linkbrary-primary-color, #6d6afe);
  position: fixed;
  bottom: 10.1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  @media all and (max-width: 767px) {
    display: block;
  }
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
export const footRef = styled.div`
  position: absolute;
  bottom: 0;
`;
