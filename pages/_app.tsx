import axios from "@/lib/axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

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

  async function UserApi() {
    const res = await axios.get(`/users`);
    setUserData(res.data.data[0] as UserData);
    setUserId(res.data.data[0].id);
  }

  useEffect(() => {
    let LS = localStorage.getItem("login");
    setLogin(String(LS));
  }, []);

  useEffect(() => {
    // console.log(login);
    if (login !== "null") {
      UserApi();
    }
  }, [login]);

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
