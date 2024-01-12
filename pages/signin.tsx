import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import style from "@/styles/SignUp.module.css";
// import axios from "axios";
import axios from "@/lib/axios";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [checkId, setCheckId] = useState<string>("");
  const [checkPwd, setCheckPwd] = useState<string>("");
  const [pwdBool, setPwdBool] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const LS = localStorage.getItem("login");
  if (LS !== null) {
    window.location.href = "/folder/1";
  }

  const togglePwd = () => {
    setPwdBool((pre) => !pre);
  };

  const validateEmail = (email: string, inputElement: HTMLInputElement) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");
    inputElement.style.borderColor = isValidEmail ? "#ccd5e3" : "red";
  };

  const validatePassword = (password: string, inputElement: HTMLInputElement) => {
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
    setPasswordError(isPasswordValid ? null : "비밀번호는 숫자와 영어가 둘 다 들어가야 하고, 8자 이상이어야 합니다.");
    inputElement.style.borderColor = isPasswordValid ? "#ccd5e3" : "red";
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "mail") {
      validateEmail(e.target.value, e.currentTarget);
    } else if (e.target.name === "pwd") {
      validatePassword(e.target.value, e.currentTarget);
    }
  };

  const loginGo = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signin();
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("login", res.data.data.accessToken);
        window.location.href = "/folder/1";
      }
    } catch {}
  };

  async function signin() {
    const userData = {
      email: checkId,
      password: checkPwd,
    };
    const res = await axios.post(`/sign-in`, userData);
    return res;
  }

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
                onBlur={handleFocusOut}
              />

              {/* 이메일 형식 에러 메시지 */}
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input
                  type={!pwdBool ? "password" : "text"}
                  name="pwd"
                  id={style.pwd}
                  value={checkPwd}
                  onChange={(e) => setCheckPwd(e.target.value)}
                  onBlur={handleFocusOut}
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={togglePwd} />
              </div>

              {/* 비밀번호 규칙 에러 메시지 */}
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>
            <input type="submit" value="로그인" id={style.submit} />
          </form>
        </div>

        <div className={style.signBottom}>
          <p>소셜 로그인</p>
          <div className={style.social}>
            <Link href="https://www.google.com/">
              <img src="../img/google.png" alt="" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <img src="../img/kakao.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
