import "../styles/globals.css";
import { AuthContextProvider } from "../AuthContext";
import Protected from "../components/Protected";
const noAuthRequired = ["/", "/login", "/signup"];
import { useRouter } from "next/router";
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Protected>
          <Component {...pageProps} />
        </Protected>
      )}
    </AuthContextProvider>
  );
}
