import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardQuizCard from "../components/DashboardActiveQuizCard";
import DashboardPastQuizCard from "../components/DashboardPastQuizCard";

export default function Dashboard() {
  const [allData,setAllData] = useState([]);
  useEffect(() => {
    // console.log(id);
    const id = localStorage.getItem("admin");
    fetch("/api/getAllAdminData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          admin_id: id,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAllData(data?.data?.quizes);
        });
      },[]);
  return (
    <div>
      <DashboardLayout>
        <div className="text-3xl font-semibold">Admin Dashboard</div>
        <div className="w-full mt-8">
          <div className="text-xl">Active Quizes</div>
          <div className="mt-4 flex flex-wrap gap-4">
            {allData?.map((data,index) => {
                return (
                  <DashboardQuizCard key = {index} data={data} />
                )
            })}
          </div>
          <div className="text-xl mt-6">Past Quizes</div>
          <div className="mt-4 flex flex-wrap gap-4">
            <DashboardPastQuizCard />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
