"use client"

import React from "react";
import { Button } from "../ui/button";
import { useRefreshStore } from "@/store";
import Link from "next/link";
import { redirect } from "next/navigation";

const AllTeachers = ({ teachers }: { teachers: TeacherType[] }) => {
  const refresh = useRefreshStore((state) => state.refresh);
  const setRefresh = useRefreshStore((state) => state.setRefresh);

  

  const deleteTeacher = async (id: number) => {
    try {
      const response = await fetch("/api/teacher", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      setRefresh(!refresh);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTable = (id : string) => {
    if (id.length === 0) {
      alert("No table assigned")
  } else {
      const url = `/table/${id}`;
      alert(url)
  }
  }

  return (
    <div className="space-y-5">
      {teachers.length > 0 && (
        <div className="space-y-5 flex flex-col md:items-start md:justify-start items-center justify-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            All Teachers
          </h3>
          <div className="flex flex-wrap sm:gap-24 gap-5 justify-around w-full">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="space-y-5 grid gird-cols-3 p-2 rounded-lg sm:w-1/4 w-full">
                <span>{teacher.firstName} {teacher.lastName}</span>
                <div className="flex justify-between">
                <Button
                  onClick={() => {
                    deleteTeacher(teacher.id);
                  }}
                  >
                  Delete
                </Button>
                <Button variant={"primary"} onClick={()=>{handleTable(teacher.table)}}>
                  Table
                </Button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      ) }
    </div>
  );
};

export default AllTeachers;
