import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // fetch("/api/generateRetrieveQuiz", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     admin_id: "klvU4NDgbRkw8D1QPRzF",
    //     quiz_id: "quiz_id",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // ---------------------------------------------------------------------------------------------------------------------
    // fetch("/api/generateRetrieveQuiz", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     admin_id: "klvU4NDgbRkw8D1QPRzF",
    //   },
    //   body: JSON.stringify({
    //     id: "quiz_id1",
    //     question: "What is the capital of Turkey?",
    //     options: ["New Delhi", "Mumbai", "Istanbol", "Kolkata"],
    //     answer: 2, // index of the correct answer
    //   }),
    // });
    // ---------------------------------------------------------------------------------------------------------------------
    // fetch("/api/getAllAdminData", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     admin_id: "klvU4NDgbRkw8D1QPRzF",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // ---------------------------------------------------------------------------------------------------------------------
    // fetch("/api/generateRetrieveResult", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     admin_id: "klvU4NDgbRkw8D1QPRzF",
    //     quiz_id: "quiz_id1",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1 className="text-orange-700 text-2xl">Hello Next.js</h1>
      <span className="countdown">
        <span style={{ "--value": 24 }}></span>
      </span>
    </div>
  );
}
