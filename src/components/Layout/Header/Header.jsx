import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "@/assets/image/logo.webp"

const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <img className='header__image--logo' src={logo} alt="logo" />
        <span>Life Game</span>
      </div>
      <div className='header__user'>
        <button className='header__button--refresh'>Обновить</button>
        <button className="header__button--menu">
          <img className="header__avatar" src="https://placeimg.com/717/877" alt="user" />
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </header>
  )
}

export default Header