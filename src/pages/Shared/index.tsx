import * as S from "./styled";
import Favor from "../../components/Favor";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { useLocation } from "react-router";

interface UserFolder {
  img: string;
  name: string;
  userName: string;
}

interface CardData {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

interface TApp {
  userFolder: UserFolder;
  userStatus: boolean;
  cardData: CardData[];
  setSharedSearch: any;
}

function App({ userFolder, userStatus, cardData, setSharedSearch }: TApp) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("search");
  setSharedSearch(searchValue);

  return (
    <>
      {userStatus ? <Favor user={userFolder} /> : <S.shared>로그인을 해주세요</S.shared>}
      <Search />
      <S.cardBox>
        {cardData.map((data) => (
          <Card
            key={data.id}
            data={data}
            modalOpen={() => {
              console.log("A");
            }}
          />
        ))}
      </S.cardBox>
    </>
  );
}

export default App;
