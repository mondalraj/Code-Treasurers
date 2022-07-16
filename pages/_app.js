import "../styles/globals.css";
import { AuthContextProvider } from "../AuthContext";
import Protected from "../components/Protected";
const noAuthRequired = ["/", "/login", "/signup"];
import { useRouter } from "next/router";
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  return getLayout(
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
