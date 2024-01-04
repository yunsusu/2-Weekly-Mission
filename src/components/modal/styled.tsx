import styled from "styled-components";

export const backGround = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
`;
export const modalClose = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.6rem;
  border-radius: 100px;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background-color: #e7effb;
  color: #9fa6b2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const modalBox = styled.div`
  width: 36rem;
  /* height: 23.9rem; */
  padding: 3.2rem 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const modalTitle = styled.h2`
  font-size: 20px;
`;
export const modalSubTitle = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;
export const modalInput = styled.input`
  display: flex;
  width: 28rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;
export const modalButton = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  color: #fff;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  cursor: pointer;
`;
export const modalDeleteButton = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  color: #fff;
  background: var(--linkbrary-red, #ff5b56);
  cursor: pointer;
`;
export const shareImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;
export const shareBox = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
export const shareText = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  text-align: center;
  font-size: 13px;
`;
export const shareImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;
export const addBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export const addChoice = styled.div`
  font-size: 1.6rem;
  border-radius: 8px;
  /* background: var(--linkbrary-bg, #f0f6ff); */
  width: 100%;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const addSpan = styled.span`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-size: 14px;
`;
