import clsx from "clsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "@/store/slices/user/userSlice";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { USER_STATUS } from "@/constants";

const Auth = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector(state => state.user);
  useEffect(() => {
    if (status === USER_STATUS.status.login) {
      navigate("/");
    }
  }, [status]);

  const handlerShow = () => {
    setShow(!show)
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerAuth = () => {
    dispatch(login({ email, password }))
  };
  if (status === USER_STATUS.status.login) return <></>
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <h1 className="auth__title">Авторизация</h1>
        <form className="auth__form">
          <input
            className="auth__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handlerEmail}
          />
          <div className="auth__wrapper--input">
            <input
              className={clsx("auth__input", "auth__input--password")}
              type={show ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={handlerPassword}
            />
            <button
              className="auth__button--icon"
              type="button"
              onClick={handlerShow}
            >
              {show
                ? <VisibilityIcon className="auth__icon--visibility" />
                : <VisibilityOffIcon className="auth__icon--visibility" />
              }
            </button>
          </div>
          <div>
            <input type="checkbox" id="authCheckbox" />
            <label htmlFor="authCheckbox">Запомнить меня</label>
          </div>
          <button
            className="auth__button"
            onClick={handlerAuth}
            type="button"
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  )
}

export default Auth