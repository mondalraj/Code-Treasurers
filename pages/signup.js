import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focused, setFocused] = useState(false);

  const getAdmin = async (email, displayname) => {
    try {
      const response = await fetch("/api/addAdmin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: displayname,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      Notify.failure("Something went wrong", {
        position: "top-right",
      });
      return null;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      localStorage.setItem("idToken", cred._tokenResponse.idToken);
      const admin = await getAdmin(cred.user.email, cred.user.displayName);
      let adminId = admin.user._key.path.segments[1];
      localStorage.setItem("admin", adminId);
      if (cred) {
        router.push(`/dashboard?id=${adminId}`);
      }
    } catch (error) {
      Notify.failure("Something went wrong", {
        position: "top-right",
      });
    }
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Notify.failure("Passwords do not match", {
        position: "top-right",
      });
      return;
    }
    try {
      const response = await fetch("/api/loginWithEmail", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      const admin = await getAdmin(email, name);
      let adminId = localStorage.setItem(
        "admin",
        admin.user._key.path.segments[1]
      );
      localStorage.setItem("idToken", data.user._tokenResponse.idToken);
      if (data.success) {
        router.push(`/dashboard?id=${adminId}`);
      }
    } catch (error) {
      Notify.failure("Something went wrong", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-neutral px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-white">
              Admin Sign up
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="text-gray-200 flex justify-end mb-3">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue px-2"
                href="../login/"
              >
                Login
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 font-bold text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSubmit}
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
                className="flex gap-3 shadow-md justify-center py-3 px-2 rounded-lg items-center font-bold pr-3 cursor-pointer bg-white w-full"
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
