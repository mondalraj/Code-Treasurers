import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const TextQuestionTemplate = ({ questionsList, setQuestionsList }) => {
  const [question, setQuestion] = useState("");
  const [KeywordsList, setKeywordsList] = useState(["", "", "", ""]);
  const [timeLimit, setTimeLimit] = useState();
  const [marks, setMarks] = useState(1);
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...KeywordsList];
    list[index] = value;
    setKeywordsList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...KeywordsList];
    list.splice(index, 1);
    setKeywordsList(list);
  };

  const handleServiceAdd = () => {
    setKeywordsList([...KeywordsList, ""]);
  };

  const submitQuestion = () => {
    if (!question) {
      Notify.failure("Write down the question", {
        position: "right-bottom",
      });
      return;
    }
    if (
      KeywordsList[0].length == 0 ||
      KeywordsList[1].length == 0 ||
      KeywordsList[2].length == 0 ||
      KeywordsList[3].length == 0
    ) {
      Notify.failure("Write Atleast 4 Options", {
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
      options: KeywordsList,
      type: "text",
      timeInterval: timeLimit ? timeLimit : 0,
      marks: marks,
    };
    setQuestionsList([...questionsList, questionSchema]);

    Notify.success("Question Successfully Added", {
      position: "right-bottom",
    });

    setQuestion("");
    setKeywordsList(["", "", "", ""]);
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
          <span class="label-text">
            List down the Keywords you expect in the answer (Max 10 Keywords)*
          </span>
        </label>
        {KeywordsList.map((singleService, index) => (
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
              {KeywordsList.length !== 4 && (
                <button
                  class="btn btn-outline btn-error"
                  onClick={() => handleServiceRemove(index)}
                >
                  Remove
                </button>
              )}
            </div>
            <div className="second-division my-2">
              {KeywordsList.length - 1 === index && KeywordsList.length < 10 && (
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

export default TextQuestionTemplate;
