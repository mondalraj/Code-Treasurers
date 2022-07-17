import React, { useEffect, useState } from "react";
import QuizComponent from "../../components/QuizComponent";

const Quizid = () => {
  const [quiz, setQuiz] = useState(false);
  const QuizQuestions = [
    {
      index: 0,
      question: "test",
      options: ["test1", "test2"],
      timeInterval: 60,
    },
    {
      index: 1,
      question: "test2",
      options: ["test1", "test2","test3", "test4"],
      timeInterval: 45,
    },
    {
      index: 2,
      question: "test3",
      options: ["test1", "test2","test3"],
      timeInterval: 30,
    },
    {
      index: 3,
      question: "test4",
      options: ["test1", "test2","test3", "test4"],
      timeInterval: 60,
    },
    {
      index: 4,
      question: "test5",
      options: ["test1", "test2","test3", "test4","test5"],
      timeInterval: 90,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [endQuiz, setEndQuiz] =useState(false);
  const getFunction = (interval) => {
    // setCurrentQuestion(QuizQuestions[++index]);
    // setTimeout(() => {
    //   index++;
    // }, interval * 1000);
  };

  let i = QuizQuestions.length

  useEffect(() => {
    if (localStorage.getItem("quizStart")) {
      setQuiz(true);
    }
    if (nextQuestion == true) {
      console.log(nextQuestion);
      if (currentQuestion < QuizQuestions.length-1) {
        console.log(currentQuestion);
        setCurrentQuestion(currentQuestion + 1);
      }else{
        setEndQuiz(true)
      }
      setNextQuestion(false);
    }
  }, [nextQuestion]);

  return (
    <>
      {quiz === true ? (
        <QuizComponent
          timer={QuizQuestions[currentQuestion].timeInterval}
          currentQuestion={QuizQuestions[currentQuestion]}
          setNextQuestion={setNextQuestion}
          endQuiz = {endQuiz}
          i = {i}
        />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex justify-center">
              <button
                className="btn btn-info mt-5 text-white w-1/2"
                onClick={() => localStorage.setItem("quizStart", true)}
              >
                Enter Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quizid;
