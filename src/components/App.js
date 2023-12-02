import Shared from "./Shared";
import Search from "./Search";
import Card from "./Card";
function App({ userFolder, userStatus, cardData }) {
  return (
    <div>
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
    </div>
  );
}

export default App;
