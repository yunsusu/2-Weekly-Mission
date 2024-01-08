import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as S from "./styled";

function Search({ id, name }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [searchClose, setSearchClose] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
    }
    if (searchValue !== "") {
      setSearchClose(true);
    }
  }, [searchValue]);

  const InputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    localStorage.setItem("searchValue", newValue);
  };

  const search: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.push(`/${name}/${id}?search=${encodeURIComponent(searchValue)}`);
  };

  const searchReset = () => {
    setSearchValue("");
    setSearchClose(false);
    localStorage.removeItem("searchValue");
  };

  return (
    <S.search>
      <S.searchInner>
        <S.button type="submit" onClick={search}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M7.84442 13.8363C11.1539 13.8363 13.8368 11.1534 13.8368 7.84393C13.8368 4.53444 11.1539 1.85156 7.84442 1.85156C4.53493 1.85156 1.85205 4.53444 1.85205 7.84393C1.85205 11.1534 4.53493 13.8363 7.84442 13.8363Z"
              stroke="#666666"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0122 12.3232L14.3616 14.6665"
              stroke="#666666"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.button>
        <S.input value={searchValue} onChange={InputChange} type="text" placeholder="링크를 검색해 보세요." />
        {searchClose ? (
          <S.searchClose>
            <Link href={`/${name}/${id}`} onClick={searchReset}>
              X
            </Link>
          </S.searchClose>
        ) : null}
      </S.searchInner>
    </S.search>
  );
}
export default Search;
