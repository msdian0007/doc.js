import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ModuleTableItemsEditForm } from "./modules/ModuleTableItemsEditForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTableItems } from "../../../store/document/reducer";

export const TableOfItems = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const { tableItems } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  let tableDataView, headerActionButtonView, editFormView;
  let items = [];
  items = tableItems;

  const handleDeleteTableItems = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    dispatch(deleteTableItems(updatedItems));
  };

  if (items?.length < 1) {
    tableDataView = (
      <>
        <div
          className="bottom-0 flex items-center justify-center w-full h-full py-2 rounded-md cursor-pointer bg-primary-100 hover:bg-primary-200"
          onClick={() => {
            setIsFormOpen(true), setItemId(null);
          }}
        >
          <div className="flex items-center justify-center gap-2 px-4 rounded-full hover:scale-105 bg-primary-400">
            <span className="font-bold">+</span>
            <span>Add new item</span>
          </div>
        </div>
      </>
    );
  } else {
    tableDataView = (
      <>
        {items.map(({ description, hsn_no, qty, unit_price, total, id }) => (
          <div className="relative group/items" key={id}>
            <div className="flex items-center border-b-2 ">
              <h2 className="w-2/5 px-2 py-1 break-words">{description}</h2>
              <div className="flex w-3/5">
                <h2 className="flex justify-center w-1/3 ">{hsn_no}</h2>
                <h2 className="flex justify-center w-1/5">{qty}</h2>
                <h2 className="flex justify-end w-1/3">{unit_price}</h2>
                <h2 className="flex justify-end w-1/3 pr-2">{total}</h2>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
              <EditIcon
                className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110 hover:text-yellow-500"
                sx={{ fontSize: 20 }}
                onClick={() => {
                  setIsFormOpen(true), setItemId(id);
                }}
              />
              <DeleteIcon
                className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110 hover:text-red-500"
                sx={{ fontSize: 20 }}
                onClick={() => handleDeleteTableItems(id)}
              />
            </div>
          </div>
        ))}
      </>
    );

    headerActionButtonView = (
      <>
        <div
          className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-4 rounded-md cursor-pointer bg-black/60 group-hover/items:visible"
          onClick={() => {
            setIsFormOpen(true), setItemId(null);
          }}
        >
          <div className="flex items-center justify-center gap-2 px-4 rounded-full hover:scale-105 bg-primary-400">
            <span className="font-bold">+</span>
            <span>Add new item</span>
          </div>
        </div>
      </>
    );
  }
  if (isFormOpen) {
    let props = {
      setIsFormOpen,
      itemId,
      tableItems,
    };
    editFormView = <ModuleTableItemsEditForm {...props} />;
  }

  return (
    <>
      <div className="mb-[1.6rem]">
        <div className="relative group/items">
          <div className="flex items-center h-10 bg-primary-400 ">
            <h2 className="w-2/5 px-2 ">
              <strong>Description</strong>
            </h2>
            <div className="flex w-3/5">
              <h2 className="flex justify-center w-1/3 py-1">
                <strong>HSN Code</strong>
              </h2>
              <h2 className="flex justify-center w-1/5 py-1">
                <strong>Qty</strong>
              </h2>
              <h2 className="flex justify-end w-1/3 py-1">
                <strong>Unit Price</strong>
              </h2>
              <h2 className="flex justify-end w-1/3 py-1 pr-2">
                <strong>Amount</strong>
              </h2>
            </div>
          </div>
          {headerActionButtonView}
        </div>
        {tableDataView}
        {editFormView}
      </div>
    </>
  );
};
