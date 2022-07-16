import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import MCQTemplate from "../components/MCQTemplate";
import TextQuestionTemplate from "../components/TextQuestionTemplate";

export default function Generatequiz() {
  const [selectedQustionType, setSelectedQustionType] = useState("select");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold">Generate New Quiz</div>
        <button class="btn btn-success">Generate Quiz</button>
      </div>
      <div className="mt-5">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Pick the type of Question*</span>
          </label>
          <select
            class="select select-bordered"
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
        {selectedQustionType === "mcq" && <MCQTemplate />}
        {selectedQustionType === "text" && <TextQuestionTemplate />}
      </div>
    </div>
  );
}

Generatequiz.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
