import { useState, FormEvent } from "react";
import Link from "next/link";
import style from "@/styles/SignUp.module.css";

interface SignUpProps {}

function SignUp({}: SignUpProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setEmail(inputValue);

    const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
    setEmailError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");

    // 이메일 형식에 따라 테두리 색상 변경
    e.currentTarget.style.borderColor = isValidEmail ? "#ccd5e3" : "red";
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setPassword(inputValue);

    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(inputValue);
    setPasswordError(isPasswordValid ? null : "비밀번호는 숫자와 영어가 둘 다 들어가야 하고, 8자 이상이어야 합니다.");

    // 비밀번호 규칙에 따라 테두리 색상 변경
    e.currentTarget.style.borderColor = isPasswordValid ? "#ccd5e3" : "red";
  };

  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setConfirmPassword(inputValue);

    // 비밀번호 확인 일치 여부 검사
    const isPasswordMatch = inputValue === password;
    setConfirmPasswordError(isPasswordMatch ? null : "비밀번호가 일치하지 않습니다.");

    // 확인 비밀번호 일치 여부에 따라 테두리 색상 변경
    e.currentTarget.style.borderColor = isPasswordMatch ? "#ccd5e3" : "red";
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    // Focus out 시 실행할 함수
    console.log("Focus out event occurred for:", e.target.name);
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
            이미 회원이신가요? <Link href="../signin">로그인 하기</Link>
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={style.write}>
              <label htmlFor="mail">이메일</label>
              <input
                type="email"
                name="mail"
                id={style.mail}
                value={email}
                onChange={handleEmailChange}
                onBlur={handleFocusOut}
                required
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}

              <label htmlFor="pwd">비밀번호</label>
              <div className={style.pwd}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="pwd"
                  id={style.pwd}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handleFocusOut}
                  required
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowPassword} />
              </div>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

              <label htmlFor="confirmPwd">비밀번호 확인</label>
              <div className={style.pwd}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPwd"
                  id={style.confirmPwd}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  onBlur={handleFocusOut}
                  required
                />
                <img src="../img/eye-off.png" alt="eye-off" className={style.eye} onClick={toggleShowConfirmPassword} />
              </div>
              {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
            </div>
            <input type="submit" value="회원가입" id={style.submit} />
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
