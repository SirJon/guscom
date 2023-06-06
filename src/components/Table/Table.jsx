import Cell from "./Сell/Сell";
import { SIZE_TABLE } from "@/constants";

const Table = ({ data = [], page = 1, size = SIZE_TABLE }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__line">
          <th></th>
          <th>Ф.И.О</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table__body">
        {data.slice((page - 1) * size, page * size).map((it, i) => {
          return (
            <Cell {...it} key={it.id} sequence={(i + 1) + (page - 1) * size} />
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;
