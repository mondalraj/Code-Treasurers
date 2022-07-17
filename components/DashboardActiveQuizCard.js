import React from "react";

const DashboardQuizCard = ({ data }) => {
  const totalTime = () => {
    let time = 0;
    data.questionsList?.map((question) => {
      time += question.timeInterval;
    })
    return Math.floor(time/60);
  }
  const totalMarks = () => {
    let marks = 0;
    data.questionsList?.map((question) => {
      marks += parseInt(question.marks);
    })
    return marks;
  }
  return (
    <div className="card w-3/12 bg-neutral text-neutral-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quiz #{data.id}</h2>
        <p>Total Marks: {totalMarks()}</p>
        <p>Total Time: {totalTime()} minutes</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Close Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardQuizCard;
