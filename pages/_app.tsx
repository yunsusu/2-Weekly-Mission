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
  const [userStatus, setUserStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [sharedSearch, setSharedSearch] = useState<string>("");
  const [userFolder, setUserFolder] = useState({
    name: "",
    userName: "",
    img: "",
  });

  async function UserApi() {
    const res = await axios.get(`/users/1`);
    setUserData(res.data.data[0] as UserData);
  }

  useEffect(() => {
    UserApi();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const folderResult = await getFolders();
  //       const userResult = await UserApi(userId);

  //       setUserFolder((prev) => ({
  //         ...prev,
  //         name: folderResult.folder.name,
  //         userName: folderResult.folder.owner.name,
  //         img: folderResult.folder.owner.profileImageSource,
  //       }));

  //       setUserStatus(true);
  //       if (sharedSearch !== null) {
  //         setCardData(
  //           folderResult.folder.links.filter(
  //             (item: any) => item.description && item.description.indexOf(sharedSearch) !== -1
  //           )
  //         );
  //       } else {
  //         setCardData([...folderResult.folder.links]);
  //       }
  //       setUserData(userResult.data[0] as UserData);
  //     } catch (error) {
  //       console.log(error);
  //       setUserStatus(false);
  //     }
  //   };
  //   fetchData();
  // }, [sharedSearch]);

  return (
    <>
      <Header userData={userData} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
