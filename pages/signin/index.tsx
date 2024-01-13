import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import style from "@/styles/SignUp.module.css";
import axios from "@/lib/axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignInProps {}
interface IFormInput {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = () => {
  const [pwdBool, setPwdBool] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [wrong, setWrong] = useState<boolean>(false);

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
      setWrong(true);
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
              <img src="../img/logo.png" alt="logo" />
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
                type="email"
                name="email"
                id={style.mail}
                onBlur={handleFocusOut}
                style={{ borderColor: !wrong ? "#ccd5e3" : "red" }}
              />

              {/* 이메일 형식 에러 메시지 */}
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}

              <label htmlFor="password">비밀번호</label>
              <div className={style.pwd}>
                <input
                  {...register("password")}
                  type={!pwdBool ? "password" : "text"}
                  name="password"
                  id={style.pwd}
                  onBlur={handleFocusOut}
                  style={{ borderColor: !wrong ? "#ccd5e3" : "red" }}
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={togglePwd} />
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
