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
`;
