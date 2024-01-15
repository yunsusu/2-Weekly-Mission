import axios from "@/lib/axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UserData {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [login, setLogin] = useState<string>("null");

  async function UserApi() {
    const res = await axios.get(`/users/1`);
    setUserData(res.data.data[0] as UserData);
  }

  useEffect(() => {
    let LS = localStorage.getItem("login");
    setLogin(String(LS));
  }, []);

  useEffect(() => {
    console.log(login);
    if (login !== "null") {
      UserApi();
    }
  }, [login]);

  return (
    <>
      <Header userData={userData} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
