import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import DashboardLayout from "../components/DashboardLayout";
import MCQTemplate from "../components/MCQTemplate";
import TextQuestionTemplate from "../components/TextQuestionTemplate";

export default function Generatequiz() {
  const [selectedQustionType, setSelectedQustionType] = useState("select");
  const [questionsList, setQuestionsList] = useState([]);

  const generateQuiz = () => {
    if (questionsList.length == 0) {
      Notify.failure("Write Atleast 1 Question", {
        position: "right-bottom",
      });
      return;
    }
    console.log(questionsList);
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold">Generate New Quiz</div>
        <button className="btn btn-success" onClick={generateQuiz}>
          Generate Quiz
        </button>
      </div>
      <div className="mt-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick the type of Question*</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedQustionType}
            onChange={(e) => setSelectedQustionType(e.target.value)}
          >
            <option disabled value="select">
              Pick one
            </option>
            <option value="mcq">Multiple Choice Question</option>
            <option value="text">Text Question</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        {selectedQustionType === "mcq" && (
          <div className="flex justify-between items-start">
            <MCQTemplate
              questionsList={questionsList}
              setQuestionsList={setQuestionsList}
            />
            {questionsList.length > 0 && (
              <div className="w-1/4 ">
                <h2 className="mb-2">Total Questions:</h2>
                <div className="flex justify-start flex-wrap gap-2">
                  {questionsList.map((question, index) => {
                    return (
                      <div
                        key={index}
                        className="text-black text-md font-medium bg-blue-300 w-6 h-6 flex justify-center items-center"
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        {selectedQustionType === "text" && (
          <div className="flex justify-between items-start">
            <TextQuestionTemplate
              questionsList={questionsList}
              setQuestionsList={setQuestionsList}
            />
            {questionsList.length > 0 && (
              <div className="w-1/4 ">
                <h2 className="mb-2">Total Questions:</h2>
                <div className="flex justify-start flex-wrap gap-2">
                  {questionsList.map((question, index) => {
                    return (
                      <div
                        key={index}
                        className="text-black text-md font-medium bg-blue-300 w-6 h-6 flex justify-center items-center"
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
