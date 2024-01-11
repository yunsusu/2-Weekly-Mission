import * as H from "./styled";
import Link from "next/link";

interface UserData {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

interface THeader {
  userData: UserData | null;
}

function Header({ userData }: THeader) {
  return (
    <H.header className="Header">
      <H.header_inner>
        <Link href="/">
          <H.h1>
            <H.logo src="/img/logo.png" alt="Logo" />
          </H.h1>
        </Link>

        {userData ? (
          <H.userdata>
            <Link href="/folder/1">
              <H.userimg src={userData.image_source} alt="userimg" />
            </Link>
            {userData.email}
          </H.userdata>
        ) : (
          <H.login>
            <Link href="/signin/1">로그인</Link>
          </H.login>
        )}
      </H.header_inner>
    </H.header>
  );
}

export default Header;
