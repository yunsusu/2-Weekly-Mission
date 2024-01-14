import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import style from "@/styles/SignUp.module.css";

interface SignInProps {}
interface IFormInput {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = () => {
  const [pwdBool, togglePwd] = useToggle(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailClass, setEmailClass] = useState<string>("");
  const [pwdClass, setPwdClass] = useState<string>("");

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    loginGo(userData);
  };

  useEffect(() => {
    const LS = localStorage.getItem("login");
    if (LS !== null) {
      window.location.href = "/folder/1";
    }
  }, []);

  const validateEmail = (email: string, inputElement: HTMLInputElement) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (email === "") {
      setEmailError("이메일을 입력해 주세요");
    } else {
      setEmailError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");
    }
    setEmailClass(isValidEmail ? "" : "emailError");
  };

  const validatePassword = (password: string, inputElement: HTMLInputElement) => {
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
    if (password === "") {
      setPasswordError("비밀번호를 입력해 주세요");
    } else {
      setPasswordError(isPasswordValid ? null : "비밀번호는 숫자와 영문을 포함하여 8자 이상이어야 합니다.");
    }
    setPwdClass(isPasswordValid ? "" : "pwdError");
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      validateEmail(e.target.value, e.currentTarget);
    } else if (e.target.name === "password") {
      validatePassword(e.target.value, e.currentTarget);
    }
  };

  const loginGo = async (userData: any) => {
    // e.preventDefault();

    try {
      const res = await signin(userData);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("login", res.data.data.accessToken);
        window.location.href = "/folder/1";
      } else {
      }
    } catch (err) {
      setEmailClass("emailError");
      setPwdClass("pwdError");
      setPasswordError("이메일 혹은 비밀번호가 잘못되었습니다");
      setEmailError("이메일 혹은 비밀번호가 잘못되었습니다");
    }
  };

  async function signin(userData: any) {
    const res = await axios.post(`/sign-in`, userData);
    return res;
  }

  return (
    <div className={style.sign}>
      <div className={style.login}>
        <div className={style.signTop}>
          <h1>
            <Link href="/">
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </h1>

          <p>
            회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.write}>
              <label htmlFor="email">이메일</label>
              <input
                {...register("email")}
                className={`${emailClass === "emailError" ? style.emailError : ""}`}
                type="email"
                name="email"
                id={style.mail}
                onBlur={handleFocusOut}
                placeholder="이메일을 입력해 주세요"
              />

              {/* 이메일 형식 에러 메시지 */}
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}

              <label htmlFor="password">비밀번호</label>
              <div className={style.pwd}>
                <input
                  {...register("password")}
                  className={`${pwdClass === "pwdError" ? style.pwdError : ""}`}
                  type={!pwdBool ? "password" : "text"}
                  name="password"
                  id={style.pwd}
                  onBlur={handleFocusOut}
                  placeholder="비밀번호를 입력해 주세요"
                />
                <img src="/img/eye-off.png" alt="eye-off" className={style.eye} onClick={togglePwd} />
              </div>

              {/* 비밀번호 규칙 에러 메시지 */}
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>
            <input
              type="submit"
              value="로그인"
              id={style.submit}
              // onClick={loginGo}
            />
          </form>
        </div>

        <div className={style.signBottom}>
          <p>소셜 로그인</p>
          <div className={style.social}>
            <Link href="https://www.google.com/">
              <img src="/img/google.png" alt="구글" />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <img src="/img/kakao.png" alt="카카오" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
