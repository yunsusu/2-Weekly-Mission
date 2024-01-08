import { useState } from "react";
import * as S from "./styled";
import { formatDateYMD } from "../../utils/formatDateYMD";
import { sortAgo } from "../../utils/sortAgo";
import Link from "next/link";

interface CardData {
  created_at?: string;
  createdAt?: string;
  description: string;
  image_source?: string;
  imageSource?: string;
  title: string;
  url: string;
  // id: number;
}

interface CardProps {
  data: CardData;
  modalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Card({ data, modalOpen }: CardProps) {
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
  const min = calculateElapsedTime(time || null);
  const ago = sortAgo(min);
  const image = imageSource || image_source;
  const [kebabOpen, setKebabOpen] = useState(false);

  const handleKebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setKebabOpen((prevBool) => !prevBool);
  };

  return (
    <S.Card>
      <Link href={`${url}`} target="_blank" rel="noopener noreferrer">
        <S.cardImgWrap>
          {!image ? (
            <>
              <S.img src="/img/nullimg.png" alt={`${title}`} />
              <S.nullImg src="/img/logo.png" alt="logo" />
            </>
          ) : (
            <S.img src={`${image}`} alt={`${title}`} />
          )}
        </S.cardImgWrap>
        <S.star src="/img/star.png" />
        <S.cardText>
          <S.kebabAgo>
            <S.ago>{`${ago}`}</S.ago>
            <S.kebab onClick={handleKebabClick}>
              <img src="/img/kebab.png" alt="kebab" />
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

function calculateElapsedTime(dateString: string | null): number {
  if (dateString === null) {
    return 0;
  }
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));

  return elapsedMinutes;
}

export default Card;
