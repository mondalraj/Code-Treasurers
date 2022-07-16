import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <div>
      <div className="text-3xl font-semibold">Admin Dashboard</div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
