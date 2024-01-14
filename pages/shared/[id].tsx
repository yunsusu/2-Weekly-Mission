import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

import Favor from "../../components/Favor";
import Search from "../../components/Search";
import Card from "../../components/Card";

import * as S from "./styled";

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
  setSharedSearch: any;
}

function App() {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [folderResult, setFolderResult] = useState([]);
  const [userStatus, setUserStatus] = useState();
  // const [sharedSearch, setSharedSearch] = useState<string>("");
  const router = useRouter();
  const { id } = router.query;
  const queryParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const searchValue = queryParams.get("search");

  async function getFolders() {
    const res = await axios.get(`/sample/folder`);
    setCardData(res.data.folder.links);
    setFolderResult(res.data.folder.links);
    setUserStatus(res.data.folder);
  }

  useEffect(() => {
    getFolders();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setCardData([...folderResult]);
      return;
    }
    const filteredLinks = folderResult.filter(
      (item: any) =>
        (item.description && item.description.indexOf(searchValue) !== -1) ||
        (item.title && item.title.indexOf(searchValue) !== -1) ||
        (item.url && item.url.indexOf(searchValue) !== -1)
    );
    setCardData(filteredLinks);
  }, [searchValue, folderResult]);

  return (
    <>
      {userStatus ? <Favor user={userStatus} /> : <S.shared>로그인을 해주세요</S.shared>}
      <Search id={id} name={"shared"} />
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
