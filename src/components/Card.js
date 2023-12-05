import { useState } from "react";
import * as F from "./Style";
import nullImg from "../img/nullimg.png";
import logo from "../img/logo.png";
import kebab from "../img/kebab.png";
import star from "../img/star.png";
import { useFormatDate } from "../utils/useformatDate";
import { useAgo } from "../utils/useAgo";
import { Link } from "react-router-dom";

function Card({ data }) {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    title,
    url,
    imageSource,
    id,
  } = data;
  const time = createdAt || created_at;
  const formattedDate = useFormatDate(time);
  const min = calculateElapsedTime(time);
  const ago = useAgo(min);
  const image = imageSource || image_source;
  const [kebabBool, setKebabBool] = useState(false);

  const handleKebabClick = () => {
    setKebabBool((prevBool) => !prevBool);
  };

  return (
    <div className={`card card${id}`}>
      <Link to={`${url}`} target="_blank" rel="noopener noreferrer">
        <div className="cardImgWrap">
          {image_source == undefined && imageSource == null ? (
            <>
              <img src={nullImg} alt={`${title}`} />
              <img src={logo} alt="logo" className="nullImg" />
            </>
          ) : (
            <img src={`${image}`} alt={`${title}`} />
          )}
        </div>
      </Link>
      <F.star src={star} />
      <div className="cardText">
        <F.kebabAgo>
          <p className="ago">{`${ago}`}</p>{" "}
          <F.kebab onClick={handleKebabClick}>
            <img src={kebab} />
          </F.kebab>
          {kebabBool ? (
            <F.kebabSelect>
              <F.kebabSelectList>삭제하기</F.kebabSelectList>
              <F.kebabSelectList>폴더에 추가</F.kebabSelectList>
            </F.kebabSelect>
          ) : (
            <></>
          )}
        </F.kebabAgo>
        <p className="des">{`${description}`}</p>
        <p className="cardDate">{`${formattedDate}`}</p>
      </div>
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
