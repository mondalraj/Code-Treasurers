import Link from "next/link";
import React, { useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const QuizResultById = () => {
  useEffect(() => {
    fetch("/api/generateRetrieveResult", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          admin_id: "klvU4NDgbRkw8D1QPRzF",
          quiz_id: "quiz_id1",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
  },[]);
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
          <li>Quiz #1234</li>
        </ul>
      </div>

      <div className="text-3xl font-semibold mt-5">Results for Quiz #1234</div>

      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Questions Attempted</th>
              <th>Marks</th>
              <th>Time Taken (Min)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>20/30</td>
              <td>35/60</td>
              <td>18/30</td>
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
              <td>28/30</td>
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
              <td>25/30</td>
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
              <td>18/30</td>
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
              <td>28/30</td>
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
              <td>25/30</td>
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
              <td>18/30</td>
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
              <td>28/30</td>
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
              <td>25/30</td>
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
              <td>18/30</td>
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
              <td>28/30</td>
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
              <td>25/30</td>
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
              <td>18/30</td>
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
              <td>28/30</td>
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
              <td>25/30</td>
              <td
                className={`${
                  status3 === "pass" ? "text-success" : "text-error"
                }`}
              >
                FAIL
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default QuizResultById;
