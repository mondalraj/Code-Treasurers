import React from "react";

const DashboardQuizCard = () => {
  return (
    <div className="card w-3/12 bg-neutral text-neutral-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quiz #100456</h2>
        <p>Total Marks: 50</p>
        <p>Total Time: 30 minutes</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Close Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardQuizCard;
