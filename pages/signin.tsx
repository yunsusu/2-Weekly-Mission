import { useState, FormEvent } from "react";
import Link from "next/link";
import style from "@/styles/SignUp.module.css";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [checkId, setCheckId] = useState<string>("");
  const [checkPwd, setCheckPwd] = useState<string>("");
  const [pwdBool, setPwdBool] = useState(false);

  const togglePwd = () => {
    setPwdBool((pre) => !pre);
  };
  const loginGo = (e: FormEvent) => {
    e.preventDefault();

    if (checkId === "idid@naver.com" && checkPwd === "qwe123") {
      alert("Login successful!");
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

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
            회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
          </p>

          <form onSubmit={loginGo}>
            <div className={style.write}>
              <label htmlFor="mail">이메일</label>
              <input
                type="email"
                name="mail"
                id={style.mail}
                value={checkId}
                onChange={(e) => setCheckId(e.target.value)}
              />

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input
                  type={!pwdBool ? "password" : "text"}
                  name="pwd"
                  id={style.pwd}
                  value={checkPwd}
                  onChange={(e) => setCheckPwd(e.target.value)}
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={togglePwd} />
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
};

export default SignIn;
