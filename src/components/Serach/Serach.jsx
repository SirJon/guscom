import SearchIcon from '@mui/icons-material/Search';

const Search = ({ value, onChange, type = "text" }) => {
  return (
    <div className='search'>
      <input
        value={value}
        type={type}
        onChange={onChange}
        className='search__input'
        placeholder='Поиск...'
      />
      <SearchIcon className='search__icon' />
    </div>
  )
}

export default Search
