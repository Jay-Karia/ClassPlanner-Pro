"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import TimeTable from "@/components/timetable";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import TableActions from "@/components/table-actions";
import { useEditStore } from "@/store";

const SpecificTablePage = () => {
  const path = usePathname();
  const id = path.split("/").pop();
  const [table, setTable] = useState<TableType>();
  const { toast } = useToast();

  const { edit, setEdit } = useEditStore();

  // Fetch data from api
  useEffect(() => {
    const fetchTable = async () => {
      try {
        const res = await fetch(`/api/table/${id}`);
        const data = await res.json();
        setTable(data.table);
      } catch (error) {
        console.error(error);
        toast({
          title: "Failed to fetch table",
          variant: "destructive",
        });
      }
    };

    fetchTable();
  }, []);

  return (
    <div className="p-5 space-y-2">
      {table && (
        <>
          <TimeTable data={table} redirect={false} edit={edit}/>
          <TableActions table={table}/>
        </>
      )}
    </div>
  );
};

export default SpecificTablePage;
