import { useEffect } from "react";

export const useGetFolderLink = (selectList, folderLinkMock, setFolderLink) => {
  useEffect(() => {
    setFolderLink((prev) => {
      if (selectList === 0) {
        return folderLinkMock;
      } else {
        return folderLinkMock.filter((item) => item.folder_id === selectList);
      }
    });
  }, [selectList, folderLinkMock]);
};
export const useGetLink = (folderGetLink) => {
  useEffect(() => {
    folderGetLink();
  }, []);
};
export const useGetUser = (folderGetUser) => {
  useEffect(() => {
    folderGetUser();
  }, []);
};
