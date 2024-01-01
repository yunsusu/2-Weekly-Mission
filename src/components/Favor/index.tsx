import * as S from "./styled";

interface User {
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
      <S.userimg src={user.img} alt="userimg" />
      <S.pfirst>{`${user.userName}`}</S.pfirst>
      <S.psecond>{`${user.name}`}</S.psecond>
    </S.shared>
  );
}

export default Favor;
