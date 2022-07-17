import { useContext, createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config.js';
import { useRouter } from 'next/router.js';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [adminId, setAdminId] = useState('');
  const router = useRouter();
  // const googleSignIn = async () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider);
  //   // signInWithRedirect(auth, provider);
  // };

  // const logOut = async () => {
  //   try{
  //     await signOut(auth)
  //     console.log('logged out');
  //   }
  //   catch(err) {
  //     console.log(err);
  //   } 
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
        setAdminId(localStorage.getItem('admin'));
        router.push(`/dashboard?id=${adminId}`);
        // console.log('User', currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [adminId]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};