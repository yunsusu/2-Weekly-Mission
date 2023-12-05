import * as F from "./Style";

function Choice({ data, clickList, selectList }) {
  return (
    <F.choiceBtnWrap>
      <F.choiceBtn
        value=""
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
            className={selectList}
            value={item.id}
            title={item.name}
            onClick={clickList}
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
