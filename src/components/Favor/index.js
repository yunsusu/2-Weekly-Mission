import * as S from "./styled";

function Favor({ user }) {
  return (
    <S.shared>
      <S.userimg src={user.img} alt="userimg" />
      <S.pfirst>{`${user.userName}`}</S.pfirst>
      <S.psecond>{`${user.name}`}</S.psecond>
    </S.shared>
  );
}

export default Favor;
