import { useContext, useEffect, useState } from "react";
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

  const router = useRouter();
  const { id } = router.query;

  const queryParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const searchValue = queryParams.get("search");

  async function getFolders(id: string | string[]) {
    console.log(id);
    const res = await axios.get(`/folders/${id}`);
    console.log(res);
    setFolderResult(res.data.data[0] || []);
  }
  async function getUser(id: string | string[]) {
    const res = await axios.get(`/users/${id}/links`);
    const ress = await axios.get(`/users/${id}`);
    console.log(ress);
    setCardData(res.data.data);
    setUserStatus(ress.data.data[0]);
  }

  useEffect(() => {
    if (id) {
      getFolders(id);
      getUser(id);
    }
  }, [id]);

  useEffect(() => {
    if (!searchValue) {
      setCardData([...cardData]);
      return;
    }
    const filteredLinks = cardData.filter(
      (item: any) =>
        (item.description && item.description.indexOf(searchValue) !== -1) ||
        (item.title && item.title.indexOf(searchValue) !== -1) ||
        (item.url && item.url.indexOf(searchValue) !== -1)
    );
    setCardData(filteredLinks);
  }, [searchValue, folderResult]);

  return (
    <>
      {userStatus ? <Favor user={userStatus} folder={folderResult} /> : <S.shared>데이터가 없습니다.</S.shared>}
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
