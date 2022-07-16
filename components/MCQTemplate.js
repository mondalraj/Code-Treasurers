import React, { useState } from "react";

const MCQTemplate = () => {
  const [optionsList, setOptionsList] = useState([
    { option: "" },
    { option: "" },
  ]);
  const [question, setQuestion] = useState("");
  const [timeLimit, setTimeLimit] = useState();
  const [marks, setMarks] = useState();
  const [answer, setAnswer] = useState(0);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...optionsList];
    list[index][name] = value;
    setOptionsList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...optionsList];
    list.splice(index, 1);
    setOptionsList(list);
  };

  const handleServiceAdd = () => {
    setOptionsList([...optionsList, { option: "" }]);
  };

  const submitQuestion = () => {
    let questionSchema = {
      question: question,
      options: optionsList,
      answerIndex: answer - 1,
      type: "mcq",
      timeInterval: timeLimit ? timeLimit : 0,
      marks: marks,
    };
    console.log(questionSchema);
  };
  return (
    <div className="w-2/3 pb-16">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Write down the Question?*</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
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
                value={singleService.option}
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
              onChange={(e) => setTimeLimit(e.target.value)}
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
                  {index + 1} . {singleOption.option}
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
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <button
            class="btn btn-info absolute right-0"
            onClick={submitQuestion}
          >
            Submit Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default MCQTemplate;
