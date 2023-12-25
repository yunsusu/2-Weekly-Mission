import { useState } from "react";
import * as S from "./styled";
import nullImg from "../../img/nullimg.png";
import logo from "../../img/logo.png";
import kebab from "../../img/kebab.png";
import star from "../../img/star.png";
import { formatDateYMD } from "../../utils/formatDateYMD";
import { sortAgo } from "../../utils/sortAgo";
import { Link } from "react-router-dom";

function Card({ data, modalOpen }) {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    title,
    url,
    imageSource,
    // id,
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
    <S.Card>
      <Link to={`${url}`} target="_blank" rel="noopener noreferrer">
        <S.cardImgWrap>
          {!image ? (
            <>
              <S.img src={nullImg} alt={`${title}`} />
              <S.nullImg src={logo} alt="logo" />
            </>
          ) : (
            <S.img src={`${image}`} alt={`${title}`} />
          )}
        </S.cardImgWrap>
        <S.star src={star} />
        <S.cardText>
          <S.kebabAgo>
            <S.ago>{`${ago}`}</S.ago>
            <S.kebab onClick={handleKebabClick}>
              <img src={kebab} alt={kebab} />
            </S.kebab>
            {kebabOpen ? (
              <S.kebabSelect>
                <S.kebabSelectList onClick={modalOpen} data-title="링크 삭제" data-stat={url}>
                  삭제하기
                </S.kebabSelectList>
                <S.kebabSelectList onClick={modalOpen} data-title="폴더에 추가" data-stat="링크 주소">
                  폴더에 추가
                </S.kebabSelectList>
              </S.kebabSelect>
            ) : null}
          </S.kebabAgo>
          <S.des>{`${description}`}</S.des>
          <S.cardDate>{`${formattedDate}`}</S.cardDate>
        </S.cardText>
      </Link>
    </S.Card>
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
