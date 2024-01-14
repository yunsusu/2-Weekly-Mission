import { memo } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import * as M from "./styled";

interface Link {
  count: number;
}

interface FoldData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface TModal {
  setModal: any;
  modalValue: string;
  modalSub: string;
  foldData: FoldData[];
}

function Modal({ setModal, modalValue, modalSub, foldData }: TModal) {
  const [addBoxToggle, setAddBoxToggle] = useState(0);
  const modalClose = () => {
    setModal(false);
  };

  const router = useRouter();
  const baseUrl = window.location.host;

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  const toggleAddBox = (e: React.MouseEvent<HTMLDivElement>) => {
    const addBoxNum = e.currentTarget.getAttribute("data-num");
    setAddBoxToggle(Number(addBoxNum));
  };

  const modalSwitch = (modalValue: string) => {
    switch (modalValue) {
      case "폴더 공유":
      case "폴더에 공유":
        return null;
      case "폴더 삭제":
      case "링크 삭제":
        return <M.modalDeleteButton>삭제하기</M.modalDeleteButton>;
      default:
        return <M.modalButton>변경하기</M.modalButton>;
    }
  };

  return (
    <>
      <M.backGround>
        <M.modalBox>
          <M.modalClose onClick={modalClose}>X</M.modalClose>
          <M.modalTitle>{modalValue}</M.modalTitle>
          {modalSub ? <M.modalSubTitle>{modalSub}</M.modalSubTitle> : null}
          {modalValue === "폴더 이름 변경" || modalValue === "폴더 추가" ? (
            <M.modalInput placeholder="내용 입력" />
          ) : modalValue === "폴더에 추가" ? (
            <>
              <M.addBox>
                {foldData.map((data, i) => (
                  <M.addChoice
                    key={data.id}
                    data-num={i + 1}
                    onClick={toggleAddBox}
                    style={{
                      background: addBoxToggle === i + 1 ? "#F0F6FF" : "#fff",
                      color: addBoxToggle === i + 1 ? "#6D6AFE" : "black",
                    }}
                  >
                    {data.name}
                    <M.addSpan>{data.link.count}개 링크</M.addSpan>
                  </M.addChoice>
                ))}
              </M.addBox>
            </>
          ) : null}

          {modalSwitch(modalValue)}

          {modalValue === "폴더 공유" ? (
            <M.shareBox>
              <M.shareImgWrap>
                <M.shareImg src="/img/kakao.png" />
                <M.shareText>카카오톡</M.shareText>
              </M.shareImgWrap>
              <M.shareImgWrap>
                <M.shareImg src="/img/facebook.png" />
                <M.shareText>페이스북</M.shareText>
              </M.shareImgWrap>
              <M.shareImgWrap>
                <M.shareImg src="/img/share.png" onClick={() => copy(`${baseUrl}${location.pathname}`)} />
                <M.shareText>링크 복사</M.shareText>
              </M.shareImgWrap>
            </M.shareBox>
          ) : null}
        </M.modalBox>
      </M.backGround>
    </>
  );
}
export default memo(Modal);
