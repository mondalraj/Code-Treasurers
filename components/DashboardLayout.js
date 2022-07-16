import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="h-screen w-1/5 bg-slate-700 p-2 flex flex-col justify-between">
        <Link href="/">
          <div className="text-2xl text-white font-semibold pt-2 cursor-pointer hover:scale-x-105 transition-all">
            Code Treasurers
          </div>
        </Link>

        <div className="space-y-2">
          <Link href="/dashboard">
            <button
              class={`btn ${
                router.pathname === "/dashboard"
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Dashboard
            </button>
          </Link>
          <Link href="/generatequiz">
            <button
              class={`btn ${
                router.pathname === "/generatequiz"
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Generate Quiz
            </button>
          </Link>
          <Link href="/quizresults">
            <button
              class={`btn ${
                router.pathname === "/quizresults"
                  ? "btn-active btn-secondary"
                  : ""
              } btn-block`}
            >
              Quiz Results
            </button>
          </Link>
        </div>
        <div className="mb-2">
          <button class="btn btn-outline btn-block text-red-500">
            Logout, Rajib
          </button>
        </div>
      </div>
      <main className="w-full h-screen overflow-y-scroll p-6">{children}</main>
    </div>
  );
}
