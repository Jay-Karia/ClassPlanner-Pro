import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TimeTable = ({ data }: { data: TableType }) => {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {data.title}
        </h4>

        <div className="text-lg font-normal">
          {data.standard} - {data.division}
        </div>
      </div>

      <div className="border-2 rounded-lg p-5">
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
    </div>
  );
};

export default TimeTable;
