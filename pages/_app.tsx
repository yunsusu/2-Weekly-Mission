import axios from "@/lib/axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";

// UserData 인터페이스와 관련 상태 정의
interface UserData {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export const Cont = createContext<number | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [login, setLogin] = useState<string>("null");
  const [userId, setUserId] = useState<number | null>(null);

  // UserApi 함수 개선
  async function UserApi(userId: number | null) {
    if (userId === null) return;
    try {
      const res = await axios.get(`/users/${userId}`);
      setUserData(res.data.data[0] as UserData);
    } catch (error) {
      console.error("UserApi 에러:", error);
    }
  }

  // fetchUserData 함수를 통해 사용자 데이터 가져오기
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/users");
        console.log(response);
        setUserId(response.data.data[0].id);
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했어:", error);
      }
    }
    fetchUserData();
  }, []);

  // localStorage의 'login' 값을 감지하고 상태를 업데이트하는 로직
  useEffect(() => {
    const LS = localStorage.getItem("login") || "null";
    setLogin(LS);
  }, []);

  useEffect(() => {
    if (login !== "null") {
      UserApi(userId);
    }
  }, [userId]);

  return (
    <>
      <Cont.Provider value={userId}>
        <Header userData={userData} />
        <Component {...pageProps} />
        <Footer />
      </Cont.Provider>
    </>
  );
}
