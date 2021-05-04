export type Row = Array<string>;

export interface Props {
  classes?: string;
  headers: Row;
  rows: Array<Row>;
}
/**
 * Component for standard ui table
 * @component
 * @prop   {string} classes  Classes css
 * @prop   {Row} headers  List of header for table
 * @prop   {Array<Row>}  rows List of rows for body table
 */
const Table: React.FC<Props> = ({ headers, rows, classes }) => {

  const wrapperClasses=`${classes} overflow-x-auto bg-white rounded-lg px-4 py-2 shadow-lg`
  const tableClasses = `grid grid-cols-${headers.length} min-w-max`;
  const cellClasses = 'py-2 px-4';

  const headersTable = headers.map((cell: string, index: number) => (
    <strong key={index} className={cellClasses}>
      {cell}
    </strong>
  ));

  const rowsTable = rows.map((row: Row) => (
    row.map((cell, indexCell) => (
      <div key={indexCell} className={`border-b border-gray-300 text-gray-500 ${cellClasses}`}>
        {cell}
      </div>
    ))
  ));

  return (
    <div className={wrapperClasses}>
      <div className={tableClasses}>
        {headersTable}
        {rowsTable}
      </div>
    </div>
  );
};

export default Table;