import React, { useEffect, useState } from "react";
import QuizComponent from "../../components/QuizComponent";

const Quizid = () => {
  const [quiz, setQuiz] = useState(false);
  const QuizQuestions = [
    {
      question: "test",
      options: ["test1", "test2"],
      timeInterval: 60,
    },
    {
      question: "test2",
      options: ["test1", "test2"],
      timeInterval: 45,
    },
    {
      question: "test3",
      options: ["test1", "test2"],
      timeInterval: 30,
    },
    {
      question: "test4",
      options: ["test1", "test2"],
      timeInterval: 60,
    },
    {
      question: "test5",
      options: ["test1", "test2"],
      timeInterval: 90,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [endQuiz, setEndQuiz] =useState(false);
  let index = 0;
  const getFunction = (interval) => {
    // setCurrentQuestion(QuizQuestions[++index]);
    // setTimeout(() => {
    //   index++;
    // }, interval * 1000);
  };

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
          key={index}
          timer={QuizQuestions[currentQuestion].timeInterval}
          currentQuestion={QuizQuestions[currentQuestion]}
          setNextQuestion={setNextQuestion}
          endQuiz = {endQuiz}
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
