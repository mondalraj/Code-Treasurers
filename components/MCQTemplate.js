import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const MCQTemplate = ({ questionsList, setQuestionsList }) => {
  const [optionsList, setOptionsList] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const [timeLimit, setTimeLimit] = useState();
  const [marks, setMarks] = useState(1);
  const [answer, setAnswer] = useState(0);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...optionsList];
    list[index] = value;
    setOptionsList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...optionsList];
    list.splice(index, 1);
    setOptionsList(list);
  };

  const handleServiceAdd = () => {
    setOptionsList([...optionsList, ""]);
  };

  const submitQuestion = () => {
    if (!question) {
      Notify.failure("Write down the question", {
        position: "right-bottom",
      });
      return;
    }
    if (optionsList[0].length == 0 || optionsList[1].length == 0) {
      Notify.failure("Write Atleast 2 Options", {
        position: "right-bottom",
      });
      return;
    }
    if (answer == 0) {
      Notify.failure("Select the answer for the question", {
        position: "right-bottom",
      });
      return;
    }
    if (timeLimit <= 10) {
      Notify.failure("Give proper time limit", {
        position: "right-bottom",
      });
      return;
    }
    if (marks <= 0) {
      Notify.failure("Give appropriate marks", {
        position: "right-bottom",
      });
      return;
    }
    let questionSchema = {
      question: question,
      options: optionsList,
      answerIndex: answer - 1,
      type: "mcq",
      timeInterval: timeLimit ? timeLimit : 0,
      marks: marks,
    };
    setQuestionsList([...questionsList, questionSchema]);

    Notify.success("Question Successfully Added", {
      position: "right-bottom",
    });

    setQuestion("");
    setOptionsList(["", ""]);
    setAnswer(0);
    setTimeLimit(0);
    setMarks(1);
    // console.log(questionSchema);
  };
  return (
    <div className="w-2/3 pb-16">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Write down the Question?*</span>
        </label>
        <textarea
          class="textarea textarea-bordered  w-full"
          placeholder="Type here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <div className="bg-slate-600 h-px w-full my-5"></div>
        <label class="label">
          <span class="label-text">List down the Options*</span>
        </label>
        {optionsList.map((singleService, index) => (
          <div key={index} className="my-1">
            <div className="first-division flex gap-2 items-center">
              <div>{index + 1}</div>
              <input
                type="text"
                id="option"
                name="option"
                placeholder="Type here"
                class="input input-bordered w-full"
                value={singleService}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {optionsList.length !== 2 && (
                <button
                  class="btn btn-outline btn-error"
                  onClick={() => handleServiceRemove(index)}
                >
                  Remove
                </button>
              )}
            </div>
            <div className="second-division my-2">
              {optionsList.length - 1 === index && optionsList.length < 5 && (
                <button class="btn" onClick={handleServiceAdd}>
                  Add an Option
                </button>
              )}
            </div>
          </div>
        ))}
        <div>
          <label class="label">
            <span class="label-text">
              What is the Time Limit for this Question?*
            </span>
          </label>
          <div className="flex items-end gap-2">
            <input
              type="number"
              placeholder="Type here (Optional)"
              class="input input-bordered w-full max-w-xs"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
              min="0"
              max="300"
            />
            <div>in seconds.</div>
          </div>
        </div>
        <div className="my-2">
          <label class="label">
            <span class="label-text">
              Choose the Answer among the options you have provided?*
            </span>
          </label>
          <select
            class="select select-bordered w-full max-w-xs"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          >
            <option disabled value={0}>
              Pick one
            </option>
            {optionsList.map((singleOption, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1} . {singleOption}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-2">
          <label class="label">
            <span class="label-text">
              How many marks does this question carry?*
            </span>
          </label>
          <div>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              min="1"
              max="100"
            />
          </div>
        </div>
        <div className="relative">
          <button
            class="btn btn-info absolute right-0"
            onClick={submitQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default MCQTemplate;
