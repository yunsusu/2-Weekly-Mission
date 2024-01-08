import styled from "styled-components";

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
  top: 2rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  /* display: none; */
`;
export const kebabSelectList = styled.button`
  width: 100%;
  height: 50%;
  color: var(--gray-light-gray-100, #333236);
  font-size: 1.4rem;
  line-height: 3.2rem;
  text-align: center;
  border: 1px solid rgba(144, 144, 144, 0.1);
  &:hover {
    background: #e7effb;
    color: #6d6afe;
  }
`;
export const Card = styled.div`
  width: 100%;
  max-width: 34rem;
  height: 33.4rem;
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0);
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  position: relative;
  &:hover {
    border: 2px solid var(--blue);
  }
`;
export const cardImgWrap = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: all 1s;
    transform: scale(1.3);
  }
  &:not(hover) {
    transition: all 1s;
  }
`;
export const nullImg = styled.img`
  position: absolute;
  width: 13rem;
  opacity: 0.5;
`;
export const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const cardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem 1rem;
  gap: 1rem;
  position: relative;
  z-index: 2;
  background-color: #fff;
`;
export const ago = styled.p`
  font-size: 1.3rem;
`;
export const des = styled.p`
  font-size: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
export const cardDate = styled.p`
  font-size: 1.4rem;
`;
