import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const QuizResultById = () => {
  const [data,setData] = useState({});

  const router = useRouter();
  useEffect(() => {
    const admin_id = localStorage.getItem('admin');
    fetch("/api/generateRetrieveResult", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        admin_id: admin_id,
        quiz_id: router.query.id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        console.log(data);
      });
  }, [router.query]);
  const status1 = "fail";
  const status2 = "pass";
  const status3 = "fail";
  return (
    <DashboardLayout>
      <div className="text-lg breadcrumbs">
        <ul>
          <li className="text-info">
            <Link href="/quizresults">Quiz Results</Link>
          </li>
          <li>Quiz #{data?.id}</li>
        </ul>
      </div>

      <div className="text-3xl font-semibold mt-5">Results for Quiz #{data?.id}</div>

      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Questions Attempted</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.results?.map((item,index) => {
              return (
                <tr>
                <th>{index}</th>
                <td>{item.quiz_result.name}</td>
                <td>{item.quiz_result.attempted}/{router.query.len}</td>
                <td>{item.quiz_result.score}/{router.query.marks}</td>
                <td
                  className={`${
                    parseInt(item.quiz_result.score)/parseInt(router.query.marks) > 0.5 ? "text-error":"text-success"
                  }`}
                >
                  {parseInt(item.quiz_result.score)/parseInt(router.query.marks) > 0.5 ? "FAIL" : "PASS"}
                </td>
              </tr>
              )
            })}
            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>29/30</td>
              <td>50/60</td>
              <td
                className={`${
                  status2 === "pass" ? "text-success" : "text-error"
                }`}
              >
                PASS
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>30/30</td>
              <td>47/60</td>
              <td
                className={`${
                  status3 === "pass" ? "text-success" : "text-error"
                }`}
              >
                FAIL
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>20/30</td>
              <td>35/60</td>
              <td
                className={`${
                  status1 === "pass" ? "text-success" : "text-error"
                }`}
              >
                FAIL
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>29/30</td>
              <td>50/60</td>
              <td
                className={`${
                  status2 === "pass" ? "text-success" : "text-error"
                }`}
              >
                PASS
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>30/30</td>
              <td>47/60</td>
              <td
                className={`${
                  status3 === "pass" ? "text-success" : "text-error"
                }`}
              >
                FAIL
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>20/30</td>
              <td>35/60</td>
              <td
                className={`${
                  status1 === "pass" ? "text-success" : "text-error"
                }`}
              >
                FAIL
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default QuizResultById;
