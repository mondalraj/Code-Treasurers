import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function QuizComponent({
  timer,
  timeOutFn,
  currentQuestion,
  setNextQuestion,
  endQuiz,
}) {
  const options = ["a", "b", "c", "d"];
  const [myAnswer, setMyAnswer] = useState("");
  const [selected, setSelected] = useState("");
  const changeAnswer = (answer) => {
    setMyAnswer(answer);
    console.log(answer);
  };

  // useEffect(() => {
  //   let counter = 99;
  //   setInterval(() => {
  //     if (counter >= 0) {
  //       counter--;
  //     }
  //     document
  //       .getElementById("counterElement")
  //       .style.setProperty("--value", counter);
  //   }, 1000);
  // }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-1/2 bg-white shadow-xl">
          <div className="card-body">
            {endQuiz == true ? (
              <p>Finished</p>
            ) : (
              <>
                <div className="flex justify-between">
                  <h2 className="card-title text-black">Question 1</h2>
                  <Countdown key={5} date={Date.now() + timer * 1000} />
                </div>
                <p className="text-black">{currentQuestion.question}</p>
                <div className="card-actions flex flex-col mt-3">
                  {currentQuestion.options.map((data, index) => {
                    return (
                      <>
                        <label
                          className="rounded-lg border-[1px] border-gray-500 p-2  w-full text-start text-black hover:bg-gray-400 cursor-pointer hover:text-white"
                          onClick={() => setNextQuestion(true)}
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
