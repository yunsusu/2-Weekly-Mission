import { useEffect, useState } from "react";
import nullImg from "../img/nullimg.png";
import logo from "../img/logo.png";

function Card({ data }) {
  const formattedDate = formatDateString(data.createdAt);
  const [imgNull, setImgNull] = useState("");
  const min = calculateElapsedTime(data.createdAt);
  const [ago, setAgo] = useState("");

  useEffect(() => {
    if (data.imageSource === undefined) {
      setImgNull(nullImg);
    } else {
      setImgNull(data.imageSource);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgNull]);

  useEffect(() => {
    if (min < 2) {
      setAgo("1 minute ago");
    } else if (min <= 59) {
      setAgo(`${min} minutes ago`);
    } else if (min / 60 <= 23) {
      setAgo(`${Math.ceil(min / 60)} hour ago`);
    } else if (min / 60 >= 24 && min / 60 / 24 < 2) {
      setAgo(`1 day ago`);
    } else if (min / 60 / 24 >= 2 && min / 60 / 24 <= 30) {
      setAgo(`${Math.ceil(min / 60 / 24)} days ago`);
    } else if (min / 60 / 24 > 30 && min / 60 / 24 <= 60) {
      setAgo(`1 month ago`);
    } else if (min / 60 / 24 > 60 && min / 60 / 24 <= 365) {
      setAgo(`${Math.ceil(min / 60 / 24 / 30)} months ago`);
    } else if (min / 60 / 24 > 365 && min / 60 / 24 <= 730) {
      setAgo(`1 year ago`);
    } else {
      setAgo(`${Math.ceil(min / 60 / 24 / 365)} years ago`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`card card${data.id}`}>
      <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
        <div className="cardImgWrap">
          {data.imageSource === undefined ? (
            <>
              <img src={`${imgNull}`} alt={`${data.title}`} />
              <img src={logo} alt="logo" className="nullImg" />
            </>
          ) : (
            <img src={`${imgNull}`} alt={`${data.title}`} />
          )}
        </div>
        <div className="cardText">
          <p className="ago">{`${ago}`}</p>
          <p className="des">{`${data.description}`}</p>
          <p className="cardDate">{`${formattedDate}`}</p>
        </div>
      </a>
    </div>
  );
}
function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
function calculateElapsedTime(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const timeDifference = currentDate - targetDate;
  const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));

  return elapsedMinutes;
}
export default Card;
