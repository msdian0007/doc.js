import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useRef, useState } from "react";
import { ModulePaymentDetailsEditForm } from "./modules/ModulePaymentDetailsEditForm";
import { useDispatch, useSelector } from "react-redux";
import {
  paymentDetailsReq,
  setBasicDetails,
} from "../../../store/document/reducer";
import { Tooltip } from "@material-tailwind/react";

export const SignAndBankDetails = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const { basicDetails, paymentDetails } = useSelector(
    (state) => state.document
  );
  let actionButtonView, detailsView, editFormView;
  if (paymentDetails?.account_number && paymentDetails?.bank_name) {
    actionButtonView = (
      <>
        <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
          <EditIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={() => {
              setIsFormOpen(true);
            }}
          />
          <DeleteIcon
            className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
            sx={{ fontSize: 25 }}
            onClick={() => dispatch(paymentDetailsReq({}))}
          />
        </div>
      </>
    );
    detailsView = (
      <>
        <div className="p-1">
          <h2 className="">Bank & Payment Details</h2>
          <table className="3/4">
            <thead>
              <tr>
                <td>Account Number:</td>
                <td>{paymentDetails?.account_number}</td>
              </tr>
              <tr>
                <td>Bank Name:</td>
                <td>{paymentDetails?.bank_name}</td>
              </tr>
              <tr>
                <td>IFSC:</td>
                <td>{paymentDetails?.ifsc}</td>
              </tr>
              <tr>
                <td>GSTIN No:</td>
                <td>{paymentDetails?.gstin_no}</td>
              </tr>
            </thead>
          </table>
        </div>
      </>
    );
  } else {
    actionButtonView = (
      <>
        <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-4 rounded-md bg-black/60 group-hover/items:visible">
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
    detailsView = (
      <>
        <div className="grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100 h-auto w-auto min-w-[150px] ">
          <AccountBalanceIcon
            className="col-span-1 mx-auto"
            sx={{ fontSize: 30 }}
          />
          <span className="col-span-1 mx-auto">Payment Details</span>
        </div>
      </>
    );
  }

  if (isFormOpen) {
    // let formDetails;
    // if (paymentDetails?.account_number && paymentDetails?.bank_name) {
    //   formDetails = {
    //     account_number,
    //     bank_name,
    //     gstin_no,
    //     ifsc,
    //   };
    // }
    let props = {
      setIsFormOpen,
      formDetails:paymentDetails,
    };
    editFormView = <ModulePaymentDetailsEditForm {...props} />;
  }

  const handleFileOnChange = (e) => {
    let { name, files } = e.target;
    const imgUrl = URL.createObjectURL(files[0]);
    dispatch(setBasicDetails({ name, value: imgUrl }));
  };

  return (
    <>
      <div className="relative flex items-center justify-between mb-[1.6rem]">
        <div className="relative group/items">
          {detailsView}
          {actionButtonView}
        </div>
        <div className="mx-8">
          <div
            className={`relative group/items w-full h-auto flex justify-center my-1 ${
              basicDetails?.digital_sign ? "inline" : "hidden"
            }`}
          >
            <img
              className="max-w-[100px] max-h-[60px] "
              src={basicDetails?.digital_sign}
              alt="sign"
            />
            <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
              <DeleteIcon
                className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
                sx={{ fontSize: 25 }}
                onClick={() =>
                  dispatch(setBasicDetails({ name: "digital_sign", value: "" }))
                }
              />
            </div>
          </div>
          <Tooltip content="Add Digital Sign">
            <b
              className="py-1 mx-auto text-gray-500 border-t-2 cursor-pointer w-fit border-t-slate-400"
              onClick={() => inputRef.current.click()}
            >
              Authorized Signatory
            </b>
          </Tooltip>
          <input
            name="digital_sign"
            type="file"
            accept="image/*"
            value=""
            readOnly
            hidden
            ref={inputRef}
            onChange={handleFileOnChange}
          />
        </div>
        {editFormView}
      </div>
    </>
  );
};
