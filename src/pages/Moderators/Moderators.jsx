import Pagination from '@mui/material/Pagination';
import usePagination from '@mui/material/usePagination';

const Moderators = () => {
  const r = usePagination();
  console.log(r)
  return (
    <section>
      <h1>Модераторы</h1>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </section>
  )
}

export default Moderators