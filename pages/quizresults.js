import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Quizresults() {
  return <div className="">Quiz Results</div>;
}

Quizresults.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
