import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

const TimeTable = ({ data }: { data: TableType }) => {
  return (
    <div className="px-4 pb-4 rounded-lg hover:bg-indigo-50">
      <div className="flex p-4 space-x-3 pl-0 rounded-lg">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {data.title}
        </h4>

        <div className="text-lg font-normal">
          {data.standard} - {data.division}
        </div>
      </div>

      <div className="border-2 rounded-lg p-5 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
            {data.data[0].map((item :string, index : number) => (
              <TableHead  key={index} className="w-[100px]">
                {item}
              </TableHead>
            ))}
            </TableRow>
          </TableHeader>
          <TableBody>
              {data.data.slice(1).map((row : string[], index : number) => (
                <TableRow key={index}>
                  {row.map((item : string, index : number) => (
                    <TableCell key={index}>{item}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
        {/* <Button className="float-right" variant={"primary"}>Export</Button> */}
    </div>
  );
};

export default TimeTable;
