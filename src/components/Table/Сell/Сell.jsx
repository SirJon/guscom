
import ButtonStatus from "../ButtonStatus/ButtonStatus";

const Сell = ({ id, image, name, status, sequence }) => {
  return (
    <tr className="table__line">
      <td className="table__data">{sequence}</td>
      <td className="table__data">
        <img className="table__image" src={image} alt={name} />
        <span>{name}</span>
      </td>
      <td className="table__data">{status}</td>
      <td className="table__data">
        <ButtonStatus id={id} />
      </td>
    </tr>
  )
}

export default Сell;
