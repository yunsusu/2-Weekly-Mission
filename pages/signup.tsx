import Link from "next/link";
import style from "@/styles/SignUp.module.css";

function SignUp() {
  return (
    <div className={style.sign}>
      <div className={style.login}>
        <div className={style.signTop}>
          <h1>
            <Link href="/">
              <img src="../img/logo.png" alt="logo" />
            </Link>
          </h1>

          <p>
            이미 회원이신가요? <Link href="../signin">로그인 하기</Link>
          </p>

          <form>
            <div className={style.write}>
              <label htmlFor="mail">이메일</label>
              <input type="email" name="mail" id={style.mail} />

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input type="password" name="pwd" id={style.pwd} />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} />
              </div>
            </div>
            <input type="submit" value="로그인" id={style.submit} />
          </form>
        </div>

        <div className={style.signBottom}>
          <p>소셜 로그인</p>
          <div className={style.social}>
            <a href="https://www.google.com/">
              <img src="../img/google.png" alt="" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="../img/kakao.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
