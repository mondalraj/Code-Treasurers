import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { firebaseApp } from "../firebase-config";
import { useRouter } from "next/router";
import { UserAuth } from "../AuthContext";

export default function Signup() {
  const { googleSignIn, user } = UserAuth();
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Admin Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <div className="text-gray-500 flex justify-end mb-3">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                Log in
              </a>
              .
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            <div className="flex justify-between items-center mt-3">
              <hr className="w-full" />
              <span className="p-2 text-gray-400 mb-1">OR</span>
              <hr className="w-full" />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex gap-3 shadow-md py-3 px-2 rounded-lg items-center font-bold pr-3 cursor-pointer text-black"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="text-3xl" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
