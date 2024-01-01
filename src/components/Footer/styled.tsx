import styled from "styled-components";
export const Footer = styled.div`
  background-color: #111322;
  padding: 3.2rem 10.4rem 6.4rem;
  @media all and (max-width: 767px) {
    padding: 3.2rem 3.2rem 6.4rem;
    position: relative;
  }
`;
export const FootInner = styled.div`
  max-width: 171.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #676767;
  font-size: 1.6rem;
`;
export const FootMid = styled.div`
  color: #cfcfcf;
  display: flex;
  gap: 3rem;
`;
export const FootLink = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 1.2rem;
`;
export const CodeitPc = styled.p`
  @media all and (max-width: 1199px) {
    display: block;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`;
export const CodeitMobile = styled.p`
  display: none;
  color: #676767;
  font-size: 1.6rem;
  margin-top: 9rem;

  @media all and (max-width: 767px) {
    display: block;
  }
`;
