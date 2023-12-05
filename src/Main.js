import App from "./components/App";
import Folder from "./components/Folder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getFolders, UserApi } from "./api";
import { useEffect, useState } from "react";

function Main() {
  const [userStatus, setUserStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [userProfile, setUserProfile] = useState({
    img: "",
    email: "",
  });
  const [userFolder, setUserFolder] = useState({
    name: "",
    userName: "",
    img: "",
  });

  const loginData = async () => {
    try {
      const result = await getFolders();
      setUserFolder((prev) => ({
        ...prev,
        name: result.folder.name,
        userName: result.folder.owner.name,
        img: result.folder.owner.profileImageSource,
      }));
      setCardData([...result.folder.links]);
      setUserStatus(true);
    } catch (error) {
      console.log(error);
      setUserStatus(false);
    }
  };
  const user = async () => {
    try {
      const result = await UserApi();
      //   console.log(result.data[0]);
      setUserData(result.data[0]);
      setUserProfile((prev) => ({
        ...prev,
        img: result.data[0].image_source,
        email: result.data[0].email,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();
  }, []);
  useEffect(() => {
    loginData();
  }, []);

  return (
    <BrowserRouter>
      <Header userData={userData} userProfile={userProfile} />
      <Routes>
        <Route
          path="/shared"
          element={
            <App
              userFolder={userFolder}
              userStatus={userStatus}
              cardData={cardData}
            />
          }
        />
        <Route path="/folder">
          <Route index element={<Folder />} />
          <Route path="*" element={<Folder />} />
        </Route>
        <Route
          path="*"
          element={
            <App
              userFolder={userFolder}
              userStatus={userStatus}
              cardData={cardData}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
