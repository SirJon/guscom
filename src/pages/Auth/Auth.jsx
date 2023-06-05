
const Auth = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        <input type="text" />
        <input type="text" />
        <div>
          <input type="checkbox" id="authCheckbox" />
          <label htmlFor="authCheckbox">Запомнить меня</label>
        </div>
        <button>Войти</button>
      </form>
    </div>
  )
}

export default Auth