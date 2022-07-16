import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config.js';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // onAuthStateChanged(auth, (currentUser) => {
    //     console.log(currentUser);
    //     if(currentUser){
    //       router.push('/dashboard');
    //     }else{
    //       router.push('/login');
    //     }
    //     // if(!currentUser){
    //     //   // setUser(currentUser);
    //     //   router.push("/login");
    //     //   // console.log('User', currentUser);
    //     // }
    // });

    const handleGoogleSignIn = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, provider);
        localStorage.setItem("idToken", cred._tokenResponse.idToken);
      } catch (error) {
        console.error(error.message);
      }
    };

    const handleSubmit = async () => {
      try {
        const response = await fetch('/api/loginWithEmail', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'email': email,
            'password': password,
          }
        });
        const data = await response.json();
        localStorage.setItem("idToken", data.user._tokenResponse.idToken);
        if(data.success) { router.push("/dashboard") }
        console.log("Email data: ", response);
      } catch (error) {
        console.error(error.message);
      }
    }
  

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Admin Login</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-gray-500 flex justify-end mb-3">
              Don&apos;t have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="../signup/"
              >
                Signup
              </a>
              .
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="flex justify-between items-center mt-3">
              <hr className="w-full" />
              <span className="p-2 text-gray-400 mb-1">OR</span>
              <hr className="w-full" />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex gap-3 shadow-md py-3 px-2 rounded-lg items-center font-bold pr-3 text-black"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="text-3xl" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
