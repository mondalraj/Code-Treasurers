import Link from "next/link";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const QuizResultById = () => {
  const status1 = "fail";
  const status2 = "pass";
  const status3 = "fail";
  return (
    <DashboardLayout>
      <div class="text-lg breadcrumbs">
        <ul>
          <li className="text-info">
            <Link href="/quizresults">Quiz Results</Link>
          </li>
          <li>Quiz #1234</li>
        </ul>
      </div>

      <div className="text-3xl font-semibold mt-5">Results for Quiz #1234</div>

      <div class="overflow-x-auto mt-5">
        <table class="table table-zebra w-full">
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
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default QuizResultById;
