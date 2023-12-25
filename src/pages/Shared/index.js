import * as S from "./styled";
import Favor from "../../components/Favor";
import Search from "../../components/Search";
import Card from "../../components/Card";
function App({ userFolder, userStatus, cardData }) {
  return (
    <>
      {userStatus ? (
        <Favor user={userFolder} />
      ) : (
        <S.shared>로그인을 해주세요</S.shared>
      )}
      <Search />
      <S.cardBox>
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </S.cardBox>
    </>
  );
}

export default App;
