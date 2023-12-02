import * as F from "./Style";
import { createGlobalStyle } from "styled-components";
import shareImg from "../img/share.png";
import renameImg from "../img/pen.png";
import deleteImg from "../img/delete.png";
import linkImg from "../img/link.png";
import Search from "./Search";
import { useState } from "react";
import { folderData, foldLinks } from "../api";
import Choice from "./Choice";
import Card from "./Card";
import { useFoldLink, useLink, useUser } from "../hooks/useFolder";

function Folder() {
  const [foldData, setFoldeData] = useState([]);
  const [selectList, setSelectList] = useState(0);
  const [foldLinkMock, setFoldLinkMock] = useState([]);
  const [foldLink, setFoldLink] = useState([]);
  const [foldLinkTitle, setFoldLinkTitle] = useState("전체");

  const folderUser = async () => {
    try {
      const result = await folderData();
      setFoldeData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const foldLin = async () => {
    try {
      const result = await foldLinks();
      setFoldLinkMock(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickList = (e) => {
    setSelectList(Number(e.target.value));
    setFoldLinkTitle(e.target.title);
  };

  const GlobalStyle = createGlobalStyle`
  header {
    
    position: static;
  }

`;

  useFoldLink(selectList, foldLinkMock, setFoldLink);
  useLink(foldLin);
  useUser(folderUser);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <F.Main>
        <F.addLink>
          <img src={linkImg} alt="linkimg" />
          <F.addInput placeholder="링크를 추가해 보세요" />
          <F.addButton>추가하기</F.addButton>
        </F.addLink>
      </F.Main>
      <Search />
      <Choice data={foldData} selectList={selectList} clickList={clickList} />
      <F.cardTitle>
        <F.cardTitleH2>{foldLinkTitle}</F.cardTitleH2>
        {foldLinkTitle === "전체" ? (
          <></>
        ) : (
          <F.cardTitleBtnBox>
            <F.cardTitleBtn>
              <img src={shareImg} alt={shareImg} />
              <p>공유</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn>
              <img src={renameImg} alt={renameImg} />
              <p>이름 변경</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn>
              <img src={deleteImg} alt={deleteImg} />
              <p>삭제</p>
            </F.cardTitleBtn>
          </F.cardTitleBtnBox>
        )}
      </F.cardTitle>
      {foldLink.length > 0 ? (
        <div className="cardBox">
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </div>
      ) : (
        <F.noData>저장된 링크가 없습니다.</F.noData>
      )}
      <F.folderFAB>폴더 추가 +</F.folderFAB>
    </>
  );
}

export default Folder;
