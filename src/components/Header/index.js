import * as H from "./styled";
import logoImg from "../../img/logo.png";
import { Link } from "react-router-dom";

function Header({ userData }) {
  return (
    <H.header className="Header">
      <H.header_inner>
        <Link to="/">
          <H.h1>
            <H.logo src={logoImg} alt="Logo" />
          </H.h1>
        </Link>

        {userData ? (
          <H.userdata>
            <Link to="/folder">
              <H.userimg src={userData.image_source} alt="userimg" />
            </Link>
            {userData.email}
          </H.userdata>
        ) : (
          <H.login>
            <Link to="/signin">로그인</Link>
          </H.login>
        )}
      </H.header_inner>
    </H.header>
  );
}

export default Header;
