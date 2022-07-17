import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from '../firebase-config.js';
import { signOut,getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const [id,setId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    setId(localStorage.getItem("admin"));
    if(!token) router.push('/login');
    // getAuth().verifyIdToken(token)
    // .then((decodedToken) => {
    // const uid = decodedToken.uid;
    // console.log(uid);
    // })
    // .catch((error) => {
    //   router.push('/login');
    // });
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   if(!currentUser){
    //     router.push('/login');
    //   }
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  const clickHandler = () => {
    localStorage.removeItem("idToken");
    signOut(auth).then((data) => router.push("/login"));
  }

  return (
    <div className="flex">
      <div className="h-screen w-1/5 bg-slate-700 p-2 flex flex-col justify-between">
        <Link href="/">
          <div className="text-2xl text-white font-semibold pt-2 cursor-pointer hover:scale-x-105 transition-all">
            Code Treasurers
          </div>
        </Link>

        <div className="space-y-2">
          <Link href={`/dashboard?id=${id}`}>
            <button
              className={`btn ${
                router.pathname === `/dashboard`
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Dashboard
            </button>
          </Link>
          <Link href={`/generatequiz?id=${id}`}>
            <button
              className={`btn ${
                router.pathname === `/generatequiz`
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Generate Quiz
            </button>
          </Link>
          <Link href={`/quizresults?id=${id}`}>
            <button
              className={`btn ${
                router.pathname === `/quizresults`
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Quiz Results
            </button>
          </Link>
        </div>
        <div className="mb-2">
          <button className="btn btn-outline btn-block text-red-500" onClick={clickHandler}>
            Logout, Rajib
          </button>
        </div>
      </div>
      <main className="w-full h-screen overflow-y-scroll p-6">{children}</main>
    </div>
  );
}
