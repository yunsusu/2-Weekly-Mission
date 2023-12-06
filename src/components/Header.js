import "./style.css";
import logoImg from "../img/logo.png";
import { Link } from "react-router-dom";

function Header({ userData }) {
  return (
    <header>
      <div className="header_inner">
        <Link to="/">
          <h1>
            <img src={logoImg} alt="Logo" />
          </h1>
        </Link>

        {userData ? (
          <p className="userdata">
            <Link to="/folder">
              <img src={userData.image_source} alt="userimg" />
            </Link>
            {userData.email}
          </p>
        ) : (
          <Link to="/signin" className="login">
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
