import { useState } from 'react';
import { useDispatch } from "react-redux";

import { changeStatus } from "@/store/slices/moderators/moderatorsSlice";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { STATUS } from "@/constants/index";

const ButtonStatus = ({ id }) => {
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
    <div>
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
      >
        {Object.keys(STATUS).map(it => (
          <MenuItem onClick={() => handlerItem(it)} key={it}>{it}</MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default ButtonStatus;
