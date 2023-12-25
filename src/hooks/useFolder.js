import { useEffect } from "react";

export const useGetFolderLink = (selectList, folderLinkMock, setFolderLink) => {
  useEffect(() => {
    setFolderLink(() => {
      if (selectList === 0) {
        return folderLinkMock;
      } else {
        return folderLinkMock.filter((item) => item.folder_id === selectList);
      }
    });
  }, [selectList, folderLinkMock, setFolderLink]);
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
