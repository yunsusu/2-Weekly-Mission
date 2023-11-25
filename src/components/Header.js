import "./style.css";
import logoImg from "../img/logo.png";
import { HeaderApi, LoginProfile } from "../api";
import { useEffect, useState } from "react";

function Header({ setUserFolder, status, setCardData }) {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState({
    img: "",
    email: "",
  });

  const user = async () => {
    try {
      const result = await HeaderApi();
      setUserData(result);
      setUserProfile((prev) => ({
        ...prev,
        img: result.profileImageSource,
        email: result.email,
      }));
      loginData();
    } catch (error) {
      console.log(error);
    }
  };

  const loginData = async () => {
    try {
      const result = await LoginProfile();
      setUserFolder((prev) => ({
        ...prev,
        name: result.folder.name,
        userName: result.folder.owner.name,
        img: result.folder.owner.profileImageSource,
      }));
      setCardData({ ...result.folder.links });
      status(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <div className="header_inner">
        <a href="/">
          <h1>
            <img src={logoImg} alt="Logo" />
          </h1>
        </a>

        {userData ? (
          <p className="userdata">
            <img src={`${userProfile.img}`} alt="userimg" />
            {`${userProfile.email}`}
          </p>
        ) : (
          <a href="/signin">로그인</a>
        )}
      </div>
    </header>
  );
}

export default Header;
