import { current } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import party from "../public/assets/party.gif";

export default function QuizComponent({
  timer,
  timeOutFn,
  currentQuestion,
  setNextQuestion,
  endQuiz,
  index,
  i,
}) {
  const options = ["a", "b", "c", "d"];
  const [myAnswer, setMyAnswer] = useState("");
  // const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [questionsAttempted, setQuestionAttempted] = useState(0);
  const timeInterval = currentQuestion.timeInterval;
  useEffect(() => {
    let counter = parseInt(timeInterval);
    console.log("hi", timeInterval, index);
    const interval = setInterval(() => {
      if (counter > 0) {
        counter--;
      }
      if (counter == 0) {
        clearInterval(interval);
        setNextQuestion(true);
      }
      if (index < i) {
        document
          .getElementById("counterElement")
          ?.style.setProperty("--value", counter);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const scoreCalculator = (data) => {
    if (data == currentQuestion.answerIndex) {
      setScore(score + parseInt(currentQuestion.marks));
    }
    setNextQuestion(true);
  };

  console.log(questionsAttempted);
  
  localStorage.setItem("score", score);
  localStorage.setItem("attempted", questionsAttempted);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-1/2 bg-white shadow-xl">
          <div className="card-body">
            {endQuiz == true ? (
              <div className="flex flex-col justify-center items-center ">
                <img
                  src="https://c.tenor.com/qg8K8VOmzJwAAAAi/party-popper-confetti.gif"
                  alt=""
                  srcset=""
                  className="w-84 ml-5"
                />
                <p className="text-center text-black font-bold text-xl mt-5">
                  Thanks for taking the quiz. You can close this tab!
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between">
                  <h2 className="card-title text-black">
                    Question {index + 1}
                  </h2>
                  <span className="countdown font-mono text-6xl">
                    <span id="counterElement"></span>
                  </span>
                </div>
                <p className="text-black">{currentQuestion.question}</p>
                <div className="card-actions flex flex-col mt-3">
                  {currentQuestion.options.map((data, index) => {
                    return (
                      <>
                        <label
                          className="rounded-lg border-[1px] border-gray-500 p-2  w-full text-start text-black hover:bg-gray-400 cursor-pointer hover:text-white"
                          onClick={() => {
                            setQuestionAttempted(questionsAttempted+1)
                            scoreCalculator(index);
                          }}
                          htmlFor={index}
                        >
                          {data}
                        </label>
                        <input
                          id={index}
                          type="radio"
                          name="options"
                          value={data}
                          key={index}
                          className={`hidden text-black ${
                            myAnswer === data ? "bg-gray-400 text-white" : null
                          }`}
                        />
                      </>
                    );
                  })}
                </div>
              </>
            )}

            {/* <span className="countdown font-mono text-6xl">
              <span id="counterElement"></span>
            </span> */}

            {/* <div className="flex justify-center mt-5">
              <input
                type="submit"
                placeholder="Submit"
                className="text-white btn-accent w-1/2 p-2 rounded-lg"
                onClick={() => setNextQuestion(true)}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
