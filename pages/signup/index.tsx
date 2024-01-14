import { useState, FormEvent, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import style from "@/styles/SignUp.module.css";
import axios from "@/lib/axios";
import { useToggle } from "@/hooks/useToggle";

interface IFormInput {
  email: string;
  pwd?: string;
  confirmPwd?: string;
}
interface TsignUp {
  userData: IFormInput;
  userMail: { email: string };
}

function SignUp() {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);
  const [wrongMail, setWrongMail] = useState<boolean>(true);
  const [emailClass, setEmailClass] = useState<string>("");
  const [pwdClass, setPwdClass] = useState<string>("");
  const [pwdConfirm, setPwdConfirm] = useState<string>("");

  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const userData = {
      email: data.email,
      password: data.pwd,
    };
    const userMail = {
      email: data.email,
    };
    signUpGo(userData, userMail);
  };

  useEffect(() => {
    const LS = localStorage.getItem("login");
    if (LS !== null) {
      window.location.href = "/folder/1";
    }
  }, []);

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      handleEmailChange(e.target.value, e.currentTarget);
    } else if (e.target.name === "pwd") {
      handlePasswordChange(e.target.value, e.currentTarget);
    }
  };

  const handleEmailChange = (email: string, inputElement: HTMLInputElement) => {
    setWrongMail(true);
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (email === "") {
      setEmailError("이메일을 입력해 주세요");
    } else {
      setEmailError(isValidEmail ? null : "올바른 이메일 주소가 아닙니다.");
    }
    setEmailClass(isValidEmail ? "" : "emailError");
  };

  const handlePasswordChange = (pwd: string, inputElement: HTMLInputElement) => {
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pwd);

    if (pwd === "") {
      setPasswordError("비밀번호를 입력해 주세요");
    } else {
      setPasswordError(isPasswordValid ? null : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    }
    setPwdClass(isPasswordValid ? "" : "pwdError");
  };

  const password = watch("pwd");
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    const confirmPassword = e.currentTarget.value;

    // 비밀번호 확인 일치 여부 검사
    const isMatch = confirmPassword === password;
    setIsPasswordMatch(isMatch);

    // 비밀번호 확인 일치 여부에 따라 에러 메시지 및 테두리 색상 설정
    if (isMatch) {
      setConfirmPasswordError(null);
      setPwdConfirm("");
    } else {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      setPwdConfirm("pwdConfirmError");
    }
  };

  const signUpGo = (userData: IFormInput, userMail: IFormInput) => {
    if (isPasswordMatch) {
      checkmail(userData, userMail);
    }
  };

  async function signup(userData: any) {
    const res = await axios.post(`/sign-up`, userData);
    return res;
  }

  async function checkmail(userData: IFormInput, userMail: IFormInput) {
    try {
      const res = await axios.post(`/check-email`, userMail);
      if (res.status === 200) {
        setWrongMail(true);
        const signRes = await signup(userData);
        // localStorage.setItem("login", signRes.data.data.accessToken);
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
      setWrongMail(false);
      setEmailClass("emailError");
    }
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
            이미 회원이신가요? <Link href="/signin">로그인 하기</Link>
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
                placeholder="이메일을 입력해주세요"
                required
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              {wrongMail ? null : <p style={{ color: "red" }}>이메일이 중복되었습니다.</p>}

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input
                  {...register("pwd")}
                  className={`${pwdClass === "pwdError" ? style.pwdError : ""}`}
                  type={showPassword ? "text" : "password"}
                  name="pwd"
                  id={style.pwd}
                  onBlur={handleFocusOut}
                  placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                  required
                />
                <img src="/img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowPassword} />
              </div>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

              <label htmlFor="confirmPwd">비밀번호 확인</label>
              <div className={style.pwd}>
                <input
                  {...register("confirmPwd")}
                  className={`${pwdConfirm === "pwdConfirmError" ? style.pwdError : ""}`}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPwd"
                  id={style.confirmPwd}
                  onBlur={handleConfirmPasswordChange}
                  placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                  required
                />
                <img src="/img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowConfirmPassword} />
              </div>
              {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
            </div>
            <input
              // onClick={signUpGo}
              type="submit"
              value="회원가입"
              id={style.submit}
            />
          </form>
        </div>

        <div className={style.signBottom}>
          <p>소셜 로그인</p>
          <div className={style.social}>
            <a href="https://www.google.com/">
              <img src="/img/google.png" alt="구글" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="/img/kakao.png" alt="카카오" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
