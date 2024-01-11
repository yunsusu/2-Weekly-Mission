import axios from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

export default instance;

// async function fetcher(url: string) {
//   const response = await fetch(`${BASE_URL}${url}`);
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json();
// }

// export async function UserApi(id: number) {
//   return instance(`/users/${id}`);
// }

// export function getFolders() {
//   return instance("/sample/folder");
// }

// export async function folderData() {
//   return instance("/users/1/folders");
// }

// export async function foldLinks() {
//   return instance("/users/1/links");
// }
