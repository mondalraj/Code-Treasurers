import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { auth } from '../firebase-config.js';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getAdmin = async (email) => {
      try {
        const response = await fetch('/api/addAdmin', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'email': email,
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        Notify.failure("Something went wrong", {
          position: "top-right",
        });
        return null;
      }
    }

    const handleGoogleSignIn = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, provider);
        localStorage.setItem("idToken", cred._tokenResponse.idToken);
        const admin = await getAdmin(cred.user.email);
        localStorage.setItem("admin",admin.id);
      } catch (error) {
        Notify.failure("Something went wrong", {
          position: "top-right",
        });
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
        const admin = await getAdmin(email);
        localStorage.setItem("admin",admin.id);
        if(data.success) { router.push(`/dashboard?id=${admin.id}`) }
        console.log("Email data: ", response);
      } catch (error) {
        Notify.failure("Something went wrong", {
          position: "top-right",
        });
      }
    }
  

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-neutral px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-white">Admin Login</h1>
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

            <div className="text-gray-200 flex justify-end mb-3">
              Don&apos;t have an account? 
              <a
                className="no-underline border-b border-blue text-blue px-2"
                href="../signup/"
              >
                Signup
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1 font-bold"
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
                className="flex justify-center gap-3 shadow-md py-3 px-2 bg-white w-full rounded-lg items-center font-bold pr-3"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="text-3xl " />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
