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

interface TFavor {
  user: User;
}

function Favor({ user }: TFavor) {
  return (
    <S.shared>
      {/* <S.userimg src={user.image_source} alt="userimg" />
      <S.pfirst>{`${user.owner.name}`}</S.pfirst> */}
      <S.psecond>{`${user.name}`}</S.psecond>
    </S.shared>
  );
}

export default Favor;
