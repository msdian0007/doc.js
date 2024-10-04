import { useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../../public/static/nav.json";
import { setBasicDetails } from "../../../store/document/reducer";

const ITEM_HEIGHT = 48;

export const TitleAndLogo = () => {
  const { basicDetails, type } = useSelector((state) => state.document);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const imageRef = useRef();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files) {
      const imgURL = URL.createObjectURL(files[0]);
      dispatch(setBasicDetails({ name: "logo", value: imgURL }));
    }
  };

  let logoView;
  if (basicDetails?.logo) {
    logoView = (
      <div className="relative group/items cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden">
        <img
          className=""
          src={basicDetails?.logo}
          alt="logo"
          onClick={() => imageRef.current.click()}
        />
        <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
          <DeleteIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={() => dispatch(setBasicDetails({ name: "logo", value: "" }))}
          />
        </div>
      </div>
    );
  } else {
    logoView = (
      <>
        <div
          className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-blue-gray-500"
          onClick={() => imageRef.current.click()}
        >
          <div className="text-gray-300">Upload logo</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative grid grid-cols-3 bg-slate-300 items-center my-[1.6rem]">
        <div className="items-center col-span-1 mx-auto">
          <div className="cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden">
            {logoView}
          </div>
          <input
            type="file"
            id="file"
            value=""
            onChange={handleImageChange}
            accept="image/png, image/jpg, image/jpeg"
            ref={imageRef}
            readOnly
            hidden
          />
        </div>
        <div className="col-span-1"></div>
        <div className="grid items-center justify-end grid-cols-1 col-span-1 my-auto">
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
          <div className="flex justify-end w-auto">
            <Button
              id="basic-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ padding: 0 }}
            >
              <h1 className="text-2xl text-black">
                {type ? type : "Invoice"}
              </h1>
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4,
                  width: "20ch",
                },
              }}
            >
              {options.map(({ title, url }) => (
                <MenuItem
                  key={title}
                  selected={title === type}
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
            className="col-span-1 bg-white text-end"
            name="document_num"
            type="text"
            placeholder="#0001"
            onChange={(e) => dispatch(setBasicDetails(e.target))}
          />
        </div>
      </div>
    </>
  );
};
