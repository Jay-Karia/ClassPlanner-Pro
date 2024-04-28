import React from "react";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import { useToast } from "./ui/use-toast";
import { useEditStore } from "@/store";

const TableActions = ({ table }: { table: TableType }) => {

  const {toast} = useToast();
  const {edit, setEdit} = useEditStore();

    const exportToPNG = async () => {
      const element = document.getElementById('print') as HTMLElement,
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');
  
      link.href = data;
      link.download = 'downloaded-image.jpg';
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const editTable = async () => {
      setEdit(!edit);
    };

  return (
    <div className="m-5 flex justify-end gap-5">
      <Button variant={"secondary"} onClick={exportToPNG}>Export to PNG</Button>
      <Button variant={"default"} onClick={editTable} >
        {edit ? "Cancel" : "Edit Table"}
      </Button>
    </div>
  );
};

export default TableActions;
