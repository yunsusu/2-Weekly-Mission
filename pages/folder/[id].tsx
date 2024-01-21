import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import Image from "next/image";
import axios from "@/lib/axios";

import Search from "../../components/Search";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

import { useTargetRef, useFootRef } from "../../hooks/useTargetRef";
import { useGetFolderLink } from "../../hooks/useFolder";

import * as F from "./styled";
import AddLink from "@/components/AddLink";

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

  const targetRef = useRef<HTMLDivElement>(null);
  const footTargetRef = useRef<HTMLDivElement>(null);
  useTargetRef({ targetRef, setScrollAddUrl });
  useFootRef({ footTargetRef, setScrollAddUrl });

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const LS = localStorage.getItem("login");
    if (LS === null) {
      router.push(`/signin`);
    }
  }, []);
  useEffect(() => {
    if (id) {
      setSelectList(Number(id));
    }
  }, [id]);

  //api 부분
  //카드 데이터
  async function getFolders(userId: string | string[]) {
    const res = await axios.get(`/users/${userId}/links`);
    console.log(res);
    setFoldLinkMock(res.data.data);
  }
  // 태그 이름 가져오는거
  async function folderData(userId: string | string[]) {
    const res = await axios.get(`/users/${userId}/folders`);
    console.log(res);
    setFoldeData(res.data.data);
  }
  async function folderTest(userId: string | string[]) {
    const res = await axios.get(`/folders/14`);
    console.log(res);
  }

  useEffect(() => {
    if (id) {
      getFolders(id);
      folderData(id);
      folderTest(id);
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

  const ClickModalOpen = (modalValue: string, modalSub: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
    setModalValue(modalValue);
    setModalSub(modalSub);
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

      <F.Main ref={targetRef}>{scrollAddUrl && <AddLink />}</F.Main>
      {!scrollAddUrl ? (
        <F.BotMain>
          <AddLink />
        </F.BotMain>
      ) : null}
      <Search id={id} name={"folder"} />
      <Choice data={foldData} selectList={selectList} clickList={clickList} setSelectList={setSelectList} />
      <F.cardTitle>
        <F.cardTitleH2>{foldLinkTitle}</F.cardTitleH2>
        {foldLinkTitle !== "전체" && (
          <F.cardTitleBtnBox>
            <F.cardTitleBtn onClick={ClickModalOpen("폴더 공유", foldLinkTitle)}>
              <div style={{ width: "20px", height: "20px", position: "relative" }}>
                <Image src="/img/share.png" alt="shareImg" fill />
              </div>
              <p>공유</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen("폴더 이름 변경", foldLinkTitle)}>
              <div style={{ width: "20px", height: "20px", position: "relative" }}>
                <Image src="/img/pen.png" alt="renameImg" fill />
              </div>
              <p>이름 변경</p>
            </F.cardTitleBtn>
            <F.cardTitleBtn onClick={ClickModalOpen("폴더 삭제", foldLinkTitle)}>
              <div style={{ width: "20px", height: "20px", position: "relative" }}>
                <Image src="/img/delete.png" alt="deleteImg" fill />
              </div>
              <p>삭제</p>
            </F.cardTitleBtn>
          </F.cardTitleBtnBox>
        )}
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
