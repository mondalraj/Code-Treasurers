import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const DashboardQuizCard = ({ data }) => {
  const [marks, setMarks] = useState(0);

  const totalTime = () => {
    let time = 0;
    data.questionsList?.map((question) => {
      time += parseInt(question.timeInterval);
    });
    return Math.ceil(time / 60);
  };
  const totalMarks = () => {
    let marks = 0;
    data.questionsList?.map((question) => {
      marks += parseInt(question.marks);
    });
    setMarks(marks);
    return marks;
  };

  useEffect(() => {
    totalMarks();
  }, []);

  return (
    <div className="card w-3/12 bg-neutral text-neutral-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quiz #{data.id}</h2>
        <p>Total Marks: {marks}</p>
        <p>Total Time: {totalTime()} minutes</p>
        <div className="card-actions justify-end">
          <Link
            href={`/quizresults/${data.id}?len=${data.questionsList.length}&marks=${marks}`}
          >
            <button className="btn btn-info">Check result</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardQuizCard;
