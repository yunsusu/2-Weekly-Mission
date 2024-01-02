import * as F from "./styled";
import { createGlobalStyle } from "styled-components";
import shareImg from "../../img/share.png";
import renameImg from "../../img/pen.png";
import deleteImg from "../../img/delete.png";
import linkImg from "../../img/link.png";
import Search from "../../components/Search";
import { useEffect, useRef, useState } from "react";
import { folderData, foldLinks } from "../../api";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Modal from "../../components/modal";
import { useTargetRef, useFootRef } from "../../hooks/useTargetRef";
// import { useFootRef } from "../../hooks/useFootRef";

import { useGetFolderLink, useGetLink, useGetUser } from "../../hooks/useFolder";

function Folder() {
  const [foldData, setFoldeData] = useState<any[]>([]);
  const [selectList, setSelectList] = useState<number>(0);
  const [folderLinkMock, setFoldLinkMock] = useState<any[]>([]);
  const [foldLink, setFoldLink] = useState<any[]>([]);
  const [foldLinkTitle, setFoldLinkTitle] = useState<string>("전체");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");
  const [modalSub, setModalSub] = useState<string>("");
  const [scrollAddUrl, setScrollAddUrl] = useState<boolean>(true);
  console.log(scrollAddUrl);
  const targetRef = useRef<HTMLDivElement>(null);
  const footTargetRef = useRef<HTMLDivElement>(null);

  useTargetRef({ targetRef, setScrollAddUrl });
  useFootRef({ footTargetRef, setScrollAddUrl });

  // 태그 이름 가져오는거
  const folderGetUser = async () => {
    try {
      const result = await folderData();
      setFoldeData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  // 카드 데이터 가져오기
  const folderGetLink = async () => {
    try {
      const result = await foldLinks();
      setFoldLinkMock(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickList = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectList(Number(target.value));
    setFoldLinkTitle(target.title);
  };

  const FolderHeaderStyle = createGlobalStyle`
  .Header {
    position: static;
  }
`;

  const ClickModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const modalValue = e.currentTarget.getAttribute("data-title");
    const modalSub = e.currentTarget.getAttribute("data-stat");
    setModalOpen(true);
    setModalValue(modalValue || "");
    setModalSub(modalSub || "");
  };

  useGetFolderLink({ selectList, folderLinkMock, setFoldLink });
  useGetLink(folderGetLink);
  useGetUser(folderGetUser);

  return (
    <div>
      <FolderHeaderStyle />
      {modalOpen ? (
        <Modal
          setModal={setModalOpen}
          modalValue={modalValue}
          modalSub={modalSub}
          foldData={foldData}
          // selectList={selectList}
        />
      ) : null}

      <F.Main ref={targetRef}>
        {scrollAddUrl ? (
          <F.addLink>
            <img src={linkImg} alt="linkimg" />
            <F.addInput placeholder="링크를 추가해 보세요" />
            <F.addButton>추가하기</F.addButton>
          </F.addLink>
        ) : null}
      </F.Main>
      {!scrollAddUrl ? (
        <F.BotMain>
          <F.addLink>
            <img src={linkImg} alt="linkimg" />
            <F.addInput placeholder="링크를 추가해 보세요" />
            <F.addButton>추가하기</F.addButton>
          </F.addLink>
        </F.BotMain>
      ) : null}
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
      <F.footRef ref={footTargetRef}></F.footRef>
    </div>
  );
}

export default Folder;
