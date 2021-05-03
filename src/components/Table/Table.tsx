export type Row = Array<string>;

export interface Props {
  headers: Row;
  rows: Array<Row>;
}

const Table: React.FC<Props> = ({ headers, rows }) => {

  const tableClasses = `grid grid-cols-${headers.length}`;

  const headersTable = headers.map((cell: string, index: number) => (
    <strong key={index}>
      {cell}
    </strong>
  ));

  const rowsTable = rows.map((row: Row) => (
    row.map((cell, indexCell) => (
      <div key={indexCell} className="border-b border-gray-300">
        {cell}
      </div>
    ))
  ));

  return (
    <div className={tableClasses}>
      {headersTable}
      {rowsTable}
    </div>
  );
};

export default Table;