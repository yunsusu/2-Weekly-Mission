import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import style from "@/styles/SignUp.module.css";
import axios from "@/lib/axios";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);
  const [wrongMail, setWrongMail] = useState<boolean>(true);

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

  const toggleShowPassword = () => {
    useToggle(setShowConfirmPassword);
  };
  const toggleShowConfirmPassword = () => {
    useToggle(setShowPassword);
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setWrongMail(true);

    const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
    setEmailError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");

    // 이메일 형식에 따라 테두리 색상 변경
    e.currentTarget.style.borderColor = isValidEmail ? "#ccd5e3" : "red";
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(inputValue);
    setPasswordError(isPasswordValid ? null : "비밀번호는 숫자와 영어가 둘 다 들어가야 하고, 8자 이상이어야 합니다.");

    // 비밀번호 규칙에 따라 테두리 색상 변경
    e.currentTarget.style.borderColor = isPasswordValid ? "#ccd5e3" : "red";
  };

  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    const confirmPassword = e.currentTarget.value;
    const password = watch("pwd");

    // 비밀번호 확인 일치 여부 검사
    const isMatch = confirmPassword === password;
    setIsPasswordMatch(isMatch);

    // 비밀번호 확인 일치 여부에 따라 에러 메시지 및 테두리 색상 설정
    if (isMatch) {
      setConfirmPasswordError(null);
      e.currentTarget.style.borderColor = "#ccd5e3";
    } else {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      e.currentTarget.style.borderColor = "red";
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
    }
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
            이미 회원이신가요? <Link href="../signin">로그인 하기</Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.write}>
              <label htmlFor="email">이메일</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id={style.mail}
                onChange={handleEmailChange}
                style={{ borderColor: wrongMail ? "#ccd5e3" : "red" }}
                required
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              {wrongMail ? null : <p style={{ color: "red" }}>이메일이 중복되었습니다.</p>}

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input
                  {...register("pwd")}
                  type={showPassword ? "text" : "password"}
                  name="pwd"
                  id={style.pwd}
                  onChange={handlePasswordChange}
                  required
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowPassword} />
              </div>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

              <label htmlFor="confirmPwd">비밀번호 확인</label>
              <div className={style.pwd}>
                <input
                  {...register("confirmPwd")}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPwd"
                  id={style.confirmPwd}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowConfirmPassword} />
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
