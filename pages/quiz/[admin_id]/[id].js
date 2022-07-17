import React, { useEffect, useState } from "react";
import QuizComponent from "../../../components/QuizComponent";
import { useRouter } from "next/router";

const Quizid = () => {
  const [quiz, setQuiz] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const router = useRouter();
  const QuizQuestions = [
    {
      index: 0,
      question: "test",
      options: ["test1", "test2"],
      timeInterval: 60,
      answer: 1,
      marks: 10,
    },
    {
      index: 1,
      question: "test2",
      options: ["test1", "test2", "test3", "test4"],
      timeInterval: 45,
      answer: 1,
      marks: 10,
    },
    {
      index: 2,
      question: "test3",
      options: ["test1", "test2", "test3"],
      timeInterval: 30,
      answer: 1,
      marks: 10,
    },
    {
      index: 3,
      question: "test4",
      options: ["test1", "test2", "test3", "test4"],
      timeInterval: 60,
      answer: 1,
      marks: 10,
    },
    {
      index: 4,
      question: "test5",
      options: ["test1", "test2", "test3", "test4", "test5"],
      timeInterval: 90,
      answer: 1,
      marks: 10,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  // const [questionsAttempted, setQuestionAttempted] = useState(0);
  const getFunction = (interval) => {
    // setCurrentQuestion(QuizQuestions[++index]);
    // setTimeout(() => {
    //   index++;
    // }, interval * 1000);
  };

  let i = quizData?.length;

  useEffect(() => {
    localStorage.setItem("quizStart",false);
    if (localStorage.getItem("quizStart") == true) {
      setQuiz(true);
    }
    if (nextQuestion == true) {
      if (currentQuestion < quizData?.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setEndQuiz(true);
        localStorage.removeItem("quizStart");
      }
      setNextQuestion(false);
    }
  }, [nextQuestion, quiz]);
  
  // let quiz_details = []

  useEffect(()=> {
    if(endQuiz == true){
      const postQuizQuestions = async () => {
        const { admin_id, id } = router.query;
        const response = await fetch("/api/generateRetrieveResult", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            admin_id: admin_id,
            quiz_id: id,
          },
          body: JSON.stringify({
            quiz_result: {
              id: '1234',
              name: localStorage.getItem("name"),
              score: localStorage.getItem("score"),
              attempted: localStorage.getItem("attempted")
            }
          })
        });
        console.log("Quiz Ended");
      }
      postQuizQuestions()
    }

  }, [endQuiz, router.query])

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      const { admin_id, id } = router.query;
      const response = await fetch("/api/generateRetrieveQuiz", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          admin_id: admin_id,
          quiz_id: id,
        },
      });

      const data = await response.json();
      // console.log(data.data?.questionsList);
      if (data.status) {
        setQuizData(data.data?.questionsList);
      }
    };

    fetchQuizQuestions();
  }, [router.query]);

  // console.log(quizData);


  return (
    <>
      {quiz === true ? (
        <QuizComponent
          currentQuestion={quizData[currentQuestion]}
          index = {currentQuestion}
          setNextQuestion={setNextQuestion}
          endQuiz={endQuiz}
          i={i}

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
              onChange={(e) => localStorage.setItem("name", e.target.value)}
            />
            <div className="flex justify-center">
              <button
                className="btn btn-info mt-5 text-white w-1/2"
                onClick={() => {
                  localStorage.setItem("quizStart", true), setQuiz(true);
                }}
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
