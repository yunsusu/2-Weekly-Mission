import * as F from "./styled";
import { createGlobalStyle } from "styled-components";
import shareImg from "../../img/share.png";
import renameImg from "../../img/pen.png";
import deleteImg from "../../img/delete.png";
import linkImg from "../../img/link.png";
import Search from "../../components/Search";
import { useState } from "react";
import { folderData, foldLinks } from "../../api";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Modal from "../../components/modal";

import { useGetFolderLink, useGetLink, useGetUser } from "../../hooks/useFolder";

function Folder() {
  const [foldData, setFoldeData] = useState([]);
  const [selectList, setSelectList] = useState(0);
  const [folderLinkMock, setFoldLinkMock] = useState([]);
  const [foldLink, setFoldLink] = useState([]);
  const [foldLinkTitle, setFoldLinkTitle] = useState("전체");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalSub, setModalSub] = useState("");

  const folderGetUser = async () => {
    try {
      const result = await folderData();
      setFoldeData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const folderGetLink = async () => {
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

  const FolderHeaderStyle = createGlobalStyle`
  .Header {
    position: static;
  }

`;
  const ClickModalOpen = (e) => {
    e.preventDefault();
    const modalValue = e.currentTarget.getAttribute("data-title");
    const modalSub = e.currentTarget.getAttribute("data-stat");
    setModalOpen(true);
    setModalValue(modalValue);
    setModalSub(modalSub);
  };

  useGetFolderLink(selectList, folderLinkMock, setFoldLink);
  useGetLink(folderGetLink);
  useGetUser(folderGetUser);

  return (
    <>
      <FolderHeaderStyle />
      {modalOpen ? (
        <Modal
          setModal={setModalOpen}
          modalValue={modalValue}
          modalSub={modalSub}
          foldData={foldData}
          selectList={selectList}
        />
      ) : null}
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
        {foldLinkTitle !== "전체" ? (
          <F.cardTitleBtnBox>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 공유" data-stat={foldLinkTitle}>
              <img src={shareImg} alt={shareImg} />
              <p>공유</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 이름 변경">
              <img src={renameImg} alt={renameImg} />
              <p>이름 변경</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 삭제" data-stat={foldLinkTitle}>
              <img src={deleteImg} alt={deleteImg} />
              <p>삭제</p>
            </F.cardTitleBtn>
          </F.cardTitleBtnBox>
        ) : null}
      </F.cardTitle>
      {foldLink.length > 0 ? (
        <F.cardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} modalOpen={ClickModalOpen} />;
          })}
        </F.cardBox>
      ) : (
        <F.noData>저장된 링크가 없습니다.</F.noData>
      )}
      <F.folderFAB>폴더 추가 +</F.folderFAB>
    </>
  );
}

export default Folder;
