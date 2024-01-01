import { createGlobalStyle } from "styled-components";

function Global() {
  const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Pretendard;
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

:root {
  --blue: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;
  --gray1: #3e3e43;
  --gray2: #9fa6b2;
  --gray3: #ccd5e3;
  --gray4: #e7effb;
  --gray5: #f0f6ff;

}

html {
  font-size: 62.5%;
}

    
    `;
  return <GlobalStyle />;
}

export default Global;
