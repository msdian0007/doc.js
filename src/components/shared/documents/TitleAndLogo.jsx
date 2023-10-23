import { useRef, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basicDetails } from '../../../store/document/reducer';
import { options } from '../../../public/static/nav.json'

const ITEM_HEIGHT = 48;

const TitleAndLogo = ({ document_num, logo, type }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const imageRef = useRef()
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageChange = (e) => {
    const { files } = e.target
    if (files) {
      const imgURL = URL.createObjectURL(files[0])
      dispatch(basicDetails({ name: 'logo', value: imgURL }))
    }
  }

  let logoView
  if (logo) {
    logoView = (
      <div className='relative group/items cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden'>
        <img className="" src={logo} alt="logo" onClick={() => imageRef.current.click()} />
        <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">
          <DeleteIcon
            className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
            sx={{ fontSize: 25, }}
            onClick={() => dispatch(basicDetails({ name: 'logo', value: '' }))}
          />
        </div>
      </div>
    )
  } else {
    logoView = (
      <>
        <div
          className='w-[100px] h-[100px] rounded-full flex justify-center items-center bg-blue-gray-500'
          onClick={() => imageRef.current.click()}
        >
          <div className='text-gray-300'>Upload logo</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="relative grid grid-cols-3 bg-slate-300 items-center my-[1.6rem]">
        <div className="col-span-1 items-center mx-auto">
          <div className='cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden'>
            {logoView}
          </div>
          <input
            type="file"
            id="file"
            value=''
            onChange={handleImageChange}
            accept="image/png, image/jpg, image/jpeg"
            ref={imageRef}
            readOnly
            hidden
          />
        </div>
        <div className='col-span-1'></div>
        <div className='col-span-1 grid grid-cols-1 justify-end items-center my-auto'>
          {/* <select name="doc_type" id="documentType">
            {options.map(({ title, url }) => (
              <>
                <option value={title}>
                  <Link to={url}>
                    {title}
                  </Link>
                </option>
              </>
            )
            )}
          </select> */}
          <div className='w-auto flex justify-end'>
            <Button
              id="basic-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ padding: 0 }}
            >
              <h1 className='text-2xl  text-black'>{type ? type : 'Invoice'}</h1>
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4,
                  width: '20ch',
                },
              }}
            >
              {options.map(({ title, url }) => (
                <MenuItem key={title} selected={title === type}
                  onClick={() => handleClose(title, url)}
                >
                  <Link to={{ pathname: url, search: `type=${title}` }}>
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <input
            className="text-end col-span-1 bg-white" name='document_num' type="text" placeholder="#0001" onChange={(e) => dispatch(basicDetails(e.target))}
          />
        </div>
      </div>
    </>
  );
};

export default TitleAndLogo;
