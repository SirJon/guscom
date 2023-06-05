import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"offers"}>Предложения</Link>
        </li>
        <li>
          <Link to={"moderators"}>Модераторы</Link>
        </li>
        <li>
          <Link to={"education"}>Обучение</Link>
        </li>
        <li>
          <Link to={"notification"}>Уведомление</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Root