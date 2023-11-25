import Header from "./Header";
import Footer from "./Footer";
import Shared from "./shared";
import Search from "./search";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [userFolder, setUserFolder] = useState({
    name: "",
    userName: "",
    img: "",
  });
  const [cardData, setCardData] = useState({});
  console.log(cardData);
  return (
    <div>
      <Header
        setUserFolder={setUserFolder}
        status={setUserStatus}
        setCardData={setCardData}
      />
      {userStatus ? (
        <Shared user={userFolder} />
      ) : (
        <p className="shared">로그인을 해주세요</p>
      )}
      <Search />
      <div className="cardBox">
        {Object.values(cardData).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
