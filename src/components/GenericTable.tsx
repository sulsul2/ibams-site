interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const GenericTable = ({ columns, data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 even:bg-gray-50"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-sm text-gray-600">
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
