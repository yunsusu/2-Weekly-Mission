import Image from "next/image";
import * as S from "./styled";

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}
interface User {
  owner: Owner;
  img: string;
  name: string;
  userName: string;
}
interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  name: string;
  user_id: number;
}

interface TFavor {
  user: User;
  folder: Folder;
}

function Favor({ user, folder }: TFavor) {
  console.log(user);
  return (
    <S.shared>
      <S.userimg>
        <Image src={user.image_source} alt="userimg" fill />
      </S.userimg>
      <S.pfirst>{`${user.name}`}</S.pfirst>
      <S.psecond>{`${folder.name}`}</S.psecond>
    </S.shared>
  );
}

export default Favor;
