import GradingIcon from "@mui/icons-material/Grading";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addConditionsReq,
  deleteConditionsReq,
} from "../../../store/document/reducer";

export const TermsAndConditions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { tAndCList } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  const [textAreaInp, setTextAreaInp] = useState({
    id: uuid(),
    tc: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addConditionsReq(textAreaInp));
    setTextAreaInp({
      id: uuid(),
      tc: "",
    });
  };

  const handleDeleteTableItems = (id) => {
    let updatedList = tAndCList.filter((item) => item.id !== id);
    dispatch(deleteConditionsReq(updatedList));
  };

  let actionButtonView, conditionsListView, conditionsEditView;
  if (tAndCList?.length > 0 || isFormOpen) {
    actionButtonView = (
      <div className="relative group/items mb-[0.5rem]">
        <strong className="">Terms & Conditions</strong>
        <div className="absolute left-[150px] top-0">
          <div
            className="flex items-center justify-center invisible gap-2 px-4 rounded-full cursor-pointer group-hover/items:visible hover:scale-105 bg-primary-400"
            onClick={() => setIsFormOpen(true)}
          >
            <span className="font-bold">+</span>
            <span>Add new t&c</span>
          </div>
        </div>
      </div>
    );
    conditionsListView = (
      <ol className="text-xs list-disc">
        {tAndCList?.map(({ id, tc }) => (
          <div className="relative group/items" key={id}>
            <li className="ml-5 break-words" key={id}>
              {tc}
            </li>
            <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-2 rounded-md bg-black/60 group-hover/items:visible">
              {/* <EditIcon
                                className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110 hover:text-yellow-500"
                                sx={{ fontSize: 20, }}
                                onClick={() => { setIsFormOpen(true), setItemId(id) }}
                            /> */}
              <DeleteIcon
                className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110 hover:text-red-500"
                sx={{ fontSize: 20 }}
                onClick={() => handleDeleteTableItems(id)}
              />
            </div>
          </div>
        ))}
      </ol>
    );
  } else {
    if (!isFormOpen) {
      actionButtonView = (
        <div className="relative group/items h-auto w-auto max-w-[150px] mb-6">
          <div className="grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100  ">
            <GradingIcon className="col-span-1 mx-auto" sx={{ fontSize: 30 }} />
            <span className="col-span-1 mx-auto">T&C</span>
          </div>
          <div className="absolute bottom-0 z-10 flex items-center justify-center invisible w-full h-full gap-4 rounded-md bg-black/60 group-hover/items:visible">
            <AddIcon
              className="p-1 text-white rounded-full cursor-pointer bg-primary-500 hover:scale-110"
              sx={{ fontSize: 25 }}
              onClick={() => {
                setIsFormOpen(true);
              }}
            />
          </div>
        </div>
      );
    }
    conditionsListView = <></>;
  }
  if (isFormOpen) {
    conditionsEditView = (
      <div className="mb-8 ">
        <form onSubmit={handleOnSubmit}>
          <div className="relative w-fit">
            <textarea
              className="border-[0.2rem] border-primary-100 p-1 focus:border-primary-400 outline-none"
              name="tc"
              id="T&C"
              cols="40"
              rows="2"
              value={textAreaInp.tc}
              required
              onChange={(e) =>
                setTextAreaInp({
                  ...textAreaInp,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <div className="absolute right-0 z-10 flex items-center justify-center gap-2 -bottom-5 ">
              <button type="submit">
                <DoneIcon
                  className="w-5 text-white rounded-md cursor-pointer bg-primary-500 hover:scale-110"
                  sx={{ fontSize: 20 }}
                />
              </button>
              <CloseIcon
                className="text-white rounded-md cursor-pointer bg-primary-500 hover:scale-110"
                sx={{ fontSize: 20 }}
                onClick={() => setIsFormOpen(false)}
              />
            </div>
          </div>
        </form>
      </div>
    );

    if (tAndCList?.length > 0) {
      actionButtonView = (
        <div className="relative group/items">
          <strong className="">Terms & Conditions</strong>
          <div className="absolute left-[150px] top-0">
            <div className="flex items-center justify-center invisible gap-2 px-4 rounded-full cursor-pointer group-hover/items:visible hover:scale-105 bg-primary-400">
              <span className="font-bold">+</span>
              <span>Add new t&c</span>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <div className="mb-[1.6rem]">
        <div>{actionButtonView}</div>
        <div>{conditionsListView}</div>
        {conditionsEditView}
      </div>
    </>
  );
};
