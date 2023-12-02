export async function UserApi() {
  const query = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const response = await query.json();
  return response;
}
export function getFolders() {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/folder").then((res) =>
    res.json()
  );
}
export async function folderData() {
  const query = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const response = await query.json();
  return response;
}
export async function foldLinks() {
  const query = await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links`);
  const response = await query.json();
  return response;
}
