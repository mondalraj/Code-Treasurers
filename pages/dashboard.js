import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return <div>dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
