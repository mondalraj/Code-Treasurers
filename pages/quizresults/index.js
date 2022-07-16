import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardPastQuizCard from "../../components/DashboardPastQuizCard";

export default function Quizresults() {
  return (
    <DashboardLayout>
      <div className="text-3xl font-semibold">Check Quiz Results</div>
      <div className="w-full mt-8">
        <div className="mt-4 flex flex-wrap gap-4">
          <DashboardPastQuizCard />
          <DashboardPastQuizCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
