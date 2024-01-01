import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getFolders, UserApi as userApi } from "./api";
import { useEffect, useState } from "react";
import Global from "./GlobalStyle";

interface UserData {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}
interface CardData {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

function Main() {
  const [userStatus, setUserStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [sharedSearch, setSharedSearch] = useState<string>("");
  const [userFolder, setUserFolder] = useState({
    name: "",
    userName: "",
    img: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderResult = await getFolders();
        const userResult = await userApi();

        setUserFolder((prev) => ({
          ...prev,
          name: folderResult.folder.name,
          userName: folderResult.folder.owner.name,
          img: folderResult.folder.owner.profileImageSource,
        }));

        setUserStatus(true);
        if (sharedSearch !== null) {
          setCardData(
            folderResult.folder.links.filter(
              (item: any) => item.description && item.description.indexOf(sharedSearch) !== -1
            )
          );
        } else {
          setCardData([...folderResult.folder.links]);
        }
        setUserData(userResult.data[0] as UserData);
        // setUserProfile((prev) => ({
        //   ...prev,
        //   img: userResult.data[0].image_source,
        //   email: userResult.data[0].email,
        // }));
      } catch (error) {
        console.log(error);
        setUserStatus(false);
      }
    };
    fetchData();
  }, [sharedSearch]);

  return (
    <BrowserRouter>
      <Global />
      <Header userData={userData} />
      <Routes>
        <Route
          path="/"
          element={
            <Shared
              setSharedSearch={setSharedSearch}
              userFolder={userFolder}
              userStatus={userStatus}
              cardData={cardData}
            />
          }
        />
        <Route
          path="/shared"
          element={
            <Shared
              setSharedSearch={setSharedSearch}
              userFolder={userFolder}
              userStatus={userStatus}
              cardData={cardData}
            />
          }
        />
        <Route path="/folder" element={<Folder />} />

        {/* <Route path="*" element={<Navigate to="/shared" replace />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
