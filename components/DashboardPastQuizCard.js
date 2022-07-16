import Link from "next/link";
import React from "react";

const DashboardPastQuizCard = () => {
  return (
    <div className="card w-3/12 bg-info text-info-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quiz #100456</h2>
        <p>Total Marks: 50</p>
        <p>Total Time: 30 minutes</p>
        <div className="card-actions justify-end">
          <Link href="/quizresults/id">
            <button className="btn">Check Results</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DashboardPastQuizCard;
