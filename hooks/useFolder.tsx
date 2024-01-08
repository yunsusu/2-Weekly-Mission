import { useEffect } from "react";
import { useRouter } from "next/router";

interface FolderLinkMock {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: boolean;
  url: string;
}

interface TuseGetFolderLink {
  selectList: number;
  folderLinkMock: FolderLinkMock[];
  setFoldLink: React.Dispatch<React.SetStateAction<any[]>>;
}

export const useGetFolderLink = ({ selectList, folderLinkMock, setFoldLink }: TuseGetFolderLink) => {
  const router = useRouter();
  const queryParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const searchValue = queryParams.get("search");

  useEffect(() => {
    let filteredLink: FolderLinkMock[];
    if (selectList === 0) {
      filteredLink = folderLinkMock;
    } else {
      filteredLink = folderLinkMock.filter((item: any) => item.folder_id === selectList);
    }

    // 검색한거만 나오게 코드
    if (searchValue !== null) {
      filteredLink = filteredLink.filter(
        (item: FolderLinkMock) =>
          (item.description && item.description.indexOf(searchValue) !== -1) ||
          (item.title && item.title.indexOf(searchValue) !== -1) ||
          (item.url && item.url.indexOf(searchValue) !== -1)
      );
    }

    setFoldLink(() => filteredLink);
  }, [selectList, folderLinkMock, setFoldLink, searchValue]);
};

// export const useGetLink = (folderGetLink: any) => {
//   useEffect(() => {
//     folderGetLink();
//   }, []);
// };

// export const useGetUser = (folderGetUser: any) => {
//   useEffect(() => {
//     folderGetUser();
//   }, []);
// };
