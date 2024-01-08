import * as F from "./styled";
import { createGlobalStyle } from "styled-components";
import Search from "../../components/Search";
import { useEffect, useRef, useState } from "react";
import axios from "@/lib/axios";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Modal from "../../components/modal";
import { useTargetRef, useFootRef } from "../../hooks/useTargetRef";
// import { useFootRef } from "../../hooks/useFootRef";

import { useGetFolderLink } from "../../hooks/useFolder";
import { useRouter } from "next/router";

// interface CardData {
//   createdAt: string;
//   description: string;
//   id: number;
//   imageSource: string;
//   title: string;
//   url: string;
// }

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
  // const [cardData, setCardData] = useState<CardData[]>([]);

  const targetRef = useRef<HTMLDivElement>(null);
  const footTargetRef = useRef<HTMLDivElement>(null);
  useTargetRef({ targetRef, setScrollAddUrl });
  useFootRef({ footTargetRef, setScrollAddUrl });

  const router = useRouter();
  const { id } = router.query;

  //api 부분
  //카드 데이터
  async function getFolders(userId: string | string[]) {
    const res = await axios.get(`/users/${userId}/links`);
    setFoldLinkMock(res.data.data);
  }
  // 태그 이름 가져오는거
  async function folderData(userId: string | string[]) {
    const res = await axios.get(`/users/${userId}/folders`);
    setFoldeData(res.data.data);
  }

  useEffect(() => {
    if (id) {
      getFolders(id);
      folderData(id);
    }
  }, [id]);

  // api 끝

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
            <img src="/img/link.png" alt="linkimg" />
            <F.addInput placeholder="링크를 추가해 보세요" />
            <F.addButton>추가하기</F.addButton>
          </F.addLink>
        ) : null}
      </F.Main>
      {!scrollAddUrl ? (
        <F.BotMain>
          <F.addLink>
            <img src="/img/link.png" alt="linkimg" />
            <F.addInput placeholder="링크를 추가해 보세요" />
            <F.addButton>추가하기</F.addButton>
          </F.addLink>
        </F.BotMain>
      ) : null}
      <Search id={id} name={"folder"} />
      <Choice data={foldData} selectList={selectList} clickList={clickList} />
      <F.cardTitle>
        <F.cardTitleH2>{foldLinkTitle}</F.cardTitleH2>
        {foldLinkTitle !== "전체" ? (
          <F.cardTitleBtnBox>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 공유" data-stat={foldLinkTitle}>
              <img src="/img/share.png" alt="shareImg" />
              <p>공유</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 이름 변경">
              <img src="/img/pen.png" alt="renameImg" />
              <p>이름 변경</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen} data-title="폴더 삭제" data-stat={foldLinkTitle}>
              <img src="/img/delete.png" alt="deleteImg" />
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
