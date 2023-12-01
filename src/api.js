export async function UserApi() {
  const query = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const response = await query.json();
  return response;
}
export function getFolders() {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/folder").then((res) =>
    res.json()
  );
}
// export async function getFolders() {
//   const query = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
//   const response = await query.json();
//   return response;
// }
