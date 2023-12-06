import { useState } from "react";
import * as F from "./styled";
import nullImg from "../../img/nullimg.png";
import logo from "../../img/logo.png";
import kebab from "../../img/kebab.png";
import star from "../../img/star.png";
import { formatDateYMD } from "../../utils/formatDateYMD";
import { sortAgo } from "../../utils/sortAgo";
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
  const formattedDate = formatDateYMD(time);
  const min = calculateElapsedTime(time);
  const ago = sortAgo(min);
  const image = imageSource || image_source;
  const [kebabOpen, setKebabOpen] = useState(false);

  const handleKebabClick = (e) => {
    e.preventDefault();
    setKebabOpen((prevBool) => !prevBool);
  };

  return (
    <F.Card>
      <Link to={`${url}`} target="_blank" rel="noopener noreferrer">
        <div className="cardImgWrap">
          {!image ? (
            <>
              <img src={nullImg} alt={`${title}`} />
              <img src={logo} alt="logo" className="nullImg" />
            </>
          ) : (
            <img src={`${image}`} alt={`${title}`} />
          )}
        </div>
        <F.star src={star} />
        <div className="cardText">
          <F.kebabAgo>
            <p className="ago">{`${ago}`}</p>{" "}
            <F.kebab onClick={handleKebabClick}>
              <img src={kebab} alt={kebab} />
            </F.kebab>
            {kebabOpen ? (
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
      </Link>
    </F.Card>
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
