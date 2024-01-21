import { useEffect } from "react";
import * as F from "./styled";

interface Data {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { string: number };
  name: string;
  user_id: number;
}

type FolderData = Data[];

interface TChoice {
  data: FolderData;
  clickList: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectList: number;
  setSelectList: (value: number) => void;
}

function Choice({ data, clickList, selectList, setSelectList }: TChoice) {
  useEffect(() => {
    if (selectList !== 0 && !data.some((item) => item.id === selectList)) {
      setSelectList(0);
    }
  }, [selectList, data, setSelectList]);
  return (
    <F.choiceBtnWrap>
      <F.choiceBtn
        value={0}
        title="전체"
        onClick={clickList}
        style={{
          backgroundColor: selectList === 0 ? "var(--blue)" : "#fff",
          color: selectList === 0 ? "#fff" : "black",
        }}
      >
        전체
      </F.choiceBtn>
      {data &&
        data.map((item) => (
          <F.choiceBtn
            key={item.id}
            // className={selectList}
            value={item.id}
            title={item.name}
            onClick={clickList}
            // styleId={item.id}
            // 왜 위에 props가 스타일드 컴포넌트로 안넘어가지..
            style={{
              backgroundColor: selectList === item.id ? "var(--blue)" : "#fff",
              color: selectList === item.id ? "#fff" : "black",
            }}
          >
            {item.name}
          </F.choiceBtn>
        ))}
    </F.choiceBtnWrap>
  );
}
export default Choice;
