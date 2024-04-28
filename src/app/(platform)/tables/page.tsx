"use client";

import React, { useEffect, useState } from "react";
import { useTableStore } from "@/store";
import TimeTable from "@/components/timetable";
import { Button } from "@/components/ui/button";
import ScrollableFeed from "react-scrollable-feed";
import { useToast } from "@/components/ui/use-toast";

const TablesPage = () => {
  const tables = useTableStore((state) => state.tables);
  const setTables = useTableStore((state) => state.setTables);
  const [refresh, setRefresh] = useState(false);

  const { toast } = useToast()

  useEffect(() => {
    // Fetch Data
    const fetchTables = async () => {
      try {
        const response = await fetch("/api/table");
        const fetchedTables = await response.json();
        setTables(fetchedTables.tables);
      } catch (error) {
        console.error(error);
        toast({
          title: "Could not fetch tables",
          variant: "destructive"
        })
      }
    };

    fetchTables();
  }, [refresh]);

  return (
    <div className="p-5 space-y-12">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        All Tables
      </h3>
      <ScrollableFeed className={"h-96 overflow-y-scroll"}>
      {tables.length > 0 ? (
        tables.map((table, index) => (
          <div key={index}>
            <TimeTable data={table} />
          </div>
        ))
      ) : (
        <h1>No tables found</h1>
      )}

      <Button
        onClick={() => {
          setRefresh(!refresh);
        }}
        variant={"secondary"}
      >
        Refresh
      </Button>
    </ScrollableFeed>
    </div>
  );
};

export default TablesPage;
