import axios from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

// 요청 인터셉터를 추가해 토큰을 헤더에 설정
instance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // 로컬 스토리지에서 토큰을 가져옴
      const token = localStorage.getItem("login");
      if (token) {
        // 헤더에 토큰을 추가
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

export default instance;
