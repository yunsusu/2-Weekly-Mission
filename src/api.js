const BASE_URL = "https://bootcamp-api.codeit.kr/api";

async function fetcher(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function UserApi() {
  return fetcher("/users/1");
}

export function getFolders() {
  return fetcher("/sample/folder");
}

export async function folderData() {
  return fetcher("/users/1/folders");
}

export async function foldLinks() {
  return fetcher("/users/1/links");
}
