import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Badge from '@mui/material/Badge';

const Root = () => {
  const { roots } = useSelector(state => state.root)
  const location = useLocation();
  return (
    <nav className='root'>
      <ul className='root__list'>
        {roots.map(it => (
          <li
            className={clsx({
              ["root__item"]: true,
              ["root__item--activ"]: location.pathname.split("/")[1] === it.url,
            })}
            key={it.url}
          >
            <Badge
              className='root__badge'
              badgeContent={it.badge}
            >
              <Link
                className="root__link"
                to={it.url}
              >
                {it.label}
              </Link>
            </Badge>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Root