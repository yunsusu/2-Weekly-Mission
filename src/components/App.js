import Header from "./Header";
import Footer from "./Footer";
import Shared from "./Shared";
import Search from "./Search";
import Card from "./Card";
import { useEffect, useState } from "react";
import { UserApi, getFolders } from "../api";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState({
    img: "",
    email: "",
  });
  const [userFolder, setUserFolder] = useState({
    name: "",
    userName: "",
    img: "",
  });
  const [cardData, setCardData] = useState([]);

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
    }
  };

  const user = async () => {
    try {
      const result = await UserApi();
      setUserData(result);
      setUserProfile((prev) => ({
        ...prev,
        img: result.profileImageSource,
        email: result.email,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();
  }, [userProfile]);

  useEffect(() => {
    loginData();
  }, [userFolder]);

  return (
    <div>
      <Header userData={userData} userProfile={userProfile} />
      {userStatus ? (
        <Shared user={userFolder} />
      ) : (
        <p className="shared">로그인을 해주세요</p>
      )}
      <Search />
      <div className="cardBox">
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
