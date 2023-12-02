import styled from "styled-components";
export const Main = styled.div`
  padding: 9.4rem 3.2rem 6.24rem 3.2rem;
  /* margin-top: 9.4rem; */
  text-align: center;
  background-color: var(--gray5);
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
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: #fff;
  cursor: pointer;
`;
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
`;
export const star = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
export const kebabAgo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const kebab = styled.button`
  cursor: pointer;
  background-color: #fff;
`;
export const kebabSelect = styled.div`
  width: 10rem;
  height: 6.4rem;
  position: absolute;
  right: 0;
  top: 3rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  /* display: none; */
`;
export const kebabSelectList = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid #fff;
  color: var(--gray-light-gray-100, #333236);
  font-size: 1.4rem;
  line-height: 3.2rem;
  text-align: center;

  &:last-child {
    background: #e7effb;
    color: #6d6afe;
  }
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
