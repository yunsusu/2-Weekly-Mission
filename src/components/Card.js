// import { useEffect, useState } from "react";
import nullImg from "../img/nullimg.png";
import logo from "../img/logo.png";
import { useFormatDate } from "../utils/useformatDate";
import { useAgo } from "../utils/useAgo";

function Card({ data }) {
  const formattedDate = useFormatDate(data.createdAt);
  const min = calculateElapsedTime(data.createdAt);
  const ago = useAgo(min);
  const imageSource = data.imageSource || nullImg;

  return (
    <div className={`card card${data.id}`}>
      <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
        <div className="cardImgWrap">
          {data.imageSource === undefined ? (
            <>
              <img src={`${imageSource}`} alt={`${data.title}`} />
              <img src={logo} alt="logo" className="nullImg" />
            </>
          ) : (
            <img src={`${imageSource}`} alt={`${data.title}`} />
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

function calculateElapsedTime(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const timeDifference = currentDate - targetDate;
  const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));

  return elapsedMinutes;
}
export default Card;
