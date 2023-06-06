import clsx from "clsx";
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { changeStatus } from "@/store/slices/moderators/moderatorsSlice";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { STATUS } from "@/constants/index";

const ButtonStatus = ({ id, status }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerItem = (value) => {
    dispatch(changeStatus({ id, status: STATUS[value] }));
    handleClose();
  }
  return (
    <>
      <button
        onClick={handleClick}
        className='table__button'
      >
        Выбрать статус
        <ExpandCircleDownIcon className='table__icon--button' />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className='table__menu'
      >
        {Object.keys(STATUS).map(it => (
          <MenuItem
            className={clsx({
              ["table__item-menu"]: true,
              ["table__item-menu--activ"]: status === STATUS[`${it}`],
            })}
            onClick={() => handlerItem(it)}
            key={it}
          >
            {it}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ButtonStatus;
