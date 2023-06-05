import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ROOT } from "@/constants/root";
import { useLocation } from 'react-router-dom';

const Root = () => {

  const location = useLocation();
  return (
    <nav className='root'>
      <ul className='root__list'>
        {ROOT.map(it => (
          <li
            className={clsx({
              ["root__item"]: true,
              ["root__item--activ"]: location.pathname.split("/")[1] === it.url,
            })}
            key={it.url}
          >
            <Link
              className="root__link"
              to={it.url}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Root