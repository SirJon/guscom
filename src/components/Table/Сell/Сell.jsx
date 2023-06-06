
import clsx from "clsx";
import { useState } from "react";
import ButtonStatus from "../ButtonStatus/ButtonStatus";
import Skeleton from '@mui/material/Skeleton';
import { STATUS } from "@/constants";

const Сell = ({ id, image, name, status, sequence }) => {
  const [load, setLoad] = useState(false);
  const handlerLoad = () => {
    setLoad(true);
  }

  return (
    <tr className="table__line">
      <td className={clsx("table__data", "table__data--number")}>
        {sequence}
      </td>
      <td className={clsx("table__data", "table__data--name")}>
        <Skeleton
          sx={{ bgcolor: '#cfcfcf' }}
          className={clsx({
            ["table__image"]: true,
            ["table__image--hidden"]: load,
          })}
        />
        <img
          className={clsx({
            ["table__image"]: true,
            ["table__image--hidden"]: !load,
          })}
          src={image}
          alt={name}
          onLoad={handlerLoad}
        />
        <span>{name}</span>
      </td>
      <td
        className={clsx({
          ["table__data"]: true,
          ["table__status"]: true,
          ["table__status--activ"]: status === STATUS["Назначить"],
          ["table__status--suspended"]: status === STATUS["Приостановить"],
          ["table__status--delete"]: status === STATUS["Удалить"],
        })}
      >
        {status}
      </td>
      <td className="table__data">
        <ButtonStatus id={id} status={status} />
      </td>
    </tr>
  )
}

export default Сell;
