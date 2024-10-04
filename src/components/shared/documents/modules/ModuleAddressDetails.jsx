import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { ModuleDetailsEditForm } from "./ModuleDetailsEditForm";
import { useDispatch } from "react-redux";
import {
  setReceiverDetails,
  setSenderDetails,
} from "../../../../store/document/reducer";

export const ModuleAddressDetails = ({ initialButton, type, data }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteDetails = () => {
    if (type === "sender") return dispatch(setSenderDetails({}));
    dispatch(setReceiverDetails({}));
  };

  let actionButtonView, editFormView, addressDetails;
  if (!Object.values(data)?.length) {
    actionButtonView = (
      <>
        <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
          <AddIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={() => {
              setIsFormOpen(true);
            }}
          />
        </div>
      </>
    );
    addressDetails = initialButton;
  } else {
    actionButtonView = (
      <>
        <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
          <EditIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={() => setIsFormOpen(true)}
          />

          <DeleteIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={handleDeleteDetails}
          />
        </div>
      </>
    );
    addressDetails = (
      <>
        <div className="p-1">
          <div className="inline break-words">
            <b>{data?.cName}</b>
            <br />
            <span>{data?.address}</span>
            <br />
            <span>{data?.locality},</span>
            <br />
            <span>{data?.city}, </span>
            <span>{data?.state}, </span>
            <span>{data?.zip_code}</span>
            <br />
          </div>
        </div>
      </>
    );
  }

  if (isFormOpen) {
    // let formDetails;
    // if (cName && address) {
    //   formDetails = {
    //     cName,
    //     address,
    //     locality,
    //     city,
    //     state,
    //     zip_code,
    //     country,
    //   };
    // }
    let props = {
      setIsFormOpen,
      type,
      formDetails: data,
    };
    editFormView = <ModuleDetailsEditForm {...props} />;
  }

  return (
    <>
      <div className="relative group/items ">
        {addressDetails}
        {actionButtonView}
        {editFormView}
      </div>
    </>
  );
};