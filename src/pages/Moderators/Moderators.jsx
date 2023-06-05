import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changePage } from '@/store/slices/moderators/moderatorsSlice';

import Pagination from '@mui/material/Pagination';
import Table from '@/components/Table/Table';
import Search from '@/components/Serach/Serach';

import { SIZE_TABLE } from "@/constants";

const Moderators = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { moderators, page } = useSelector(state => state.moderators);
  const size = SIZE_TABLE;
  const data = moderators.filter(it => it.name.includes(search));
  const count = Math.ceil(data.length / size) <= 0 ? 1 : Math.ceil(data.length / size);

  const handleChangePagination = (_, value) => {
    dispatch(changePage(Number(value)))
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (page > count) {
      dispatch(changePage(Number(count)));
    }
  }, [data, count, page])

  return (
    <section className='moderators'>
      <h1 className='moderators__title'>Модераторы</h1>
      <div className='moderators__wrapper--nav'>
        <Pagination
          onChange={handleChangePagination}
          count={count}
          variant="outlined"
          shape="rounded"
          defaultPage={page}
          className='moderators__pagination'
        />
        <Search
          value={search}
          onChange={handleChangeSearch}
          type="text"
        />
        <button className='moderators__button'>Добавить</button>
      </div>
      <Table
        data={data}
        size={size}
        page={page}
      />
    </section>
  )
}

export default Moderators