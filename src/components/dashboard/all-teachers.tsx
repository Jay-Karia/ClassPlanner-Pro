"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRefreshStore } from "@/store";
import ScrollableFeed from "react-scrollable-feed";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AllTeachers = ({ teachers }: { teachers: TeacherType[] }) => {
  const refresh = useRefreshStore((state) => state.refresh);
  const setRefresh = useRefreshStore((state) => state.setRefresh);

  const { toast } = useToast();

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
      toast({
        title: data.msg,
        variant: "success",
      });
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not delete teacher",
        variant: "destructive",
      });
    }
  };

  const handleTable = (id: string) => {
    if (id.length === 0) {
      alert("No table assigned");
    } else {
      const url = `/table/${id}`;
      alert(url);
    }
  };

  return (
    <div className="space-y-5">
      {teachers.length > 0 && (
        <div className="space-y-5 flex flex-col md:items-start md:justify-start items-center justify-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            All Teachers
          </h3>
          {/* <ScrollableFeed className="h-96"> */}
          <div className="flex flex-wrap sm:gap-24 gap-5 justify-around w-full">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="space-y-5 grid gird-cols-3 p-5 rounded-lg sm:w-1/4 w-full bg-slate-100"
              >
                <span>
                  {teacher.firstName} {teacher.lastName}
                </span>
                <div className="flex justify-between">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button>Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete teacher and remove data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            deleteTeacher(teacher.id);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Button
                    variant={"primary"}
                    onClick={() => {
                      handleTable(teacher.table);
                    }}
                  >
                    Table
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* </ScrollableFeed> */}
        </div>
      )}
    </div>
  );
};

export default AllTeachers;
