import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ModuleTableItemsEditForm } from "./modules/ModuleTableItemsEditForm";
import { useDispatch } from "react-redux";
import { deleteTableItems } from "../../../store/document/reducer";

export const TableOfItems = ({ description, tableItems }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [itemId, setItemId] = useState(null)
    const dispatch = useDispatch()
    let tableDataView, headerActionButtonView, editFormView
    let items = []
    items = tableItems

    const handleDeleteTableItems = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        dispatch(deleteTableItems(updatedItems))
    }

    if (items?.length < 1) {
        tableDataView = (
            <>
                <div
                    className='bottom-0 bg-primary-100 cursor-pointer hover:bg-primary-200 rounded-md w-full h-full py-2 flex justify-center items-center'
                    onClick={() => { setIsFormOpen(true), setItemId(null) }}
                >
                    <div className="flex justify-center items-center gap-2 hover:scale-105 bg-primary-400 rounded-full px-4">
                        <span className="font-bold">+</span>
                        <span>Add new item</span>
                    </div>
                </div>
            </>
        )

    } else {
        tableDataView = (
            <>
                {items.map(({ description, hsn_no, qty, unit_price, total, id }) => (
                    <div className="relative group/items" key={id}>
                        <div className="flex items-center border-b-2 " >
                            <h2 className="w-2/5 px-2 py-1 break-words">{description}</h2>
                            <div className="flex w-3/5">
                                <h2 className="w-1/3 flex justify-center ">{hsn_no}</h2>
                                <h2 className="w-1/5 flex justify-center">{qty}</h2>
                                <h2 className="w-1/3 flex justify-end">{unit_price}</h2>
                                <h2 className="w-1/3 flex justify-end pr-2">{total}</h2>
                            </div>
                        </div>
                        <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">
                            <EditIcon
                                className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-yellow-500"
                                sx={{ fontSize: 20, }}
                                onClick={() => { setIsFormOpen(true), setItemId(id) }}
                            />
                            <DeleteIcon
                                className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-red-500"
                                sx={{ fontSize: 20, }}
                                onClick={() => handleDeleteTableItems(id)}
                            />
                        </div>
                    </div>
                ))}
            </>
        )

        headerActionButtonView = (
            <>
                <div
                    className='absolute cursor-pointer z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible'
                    onClick={() => { setIsFormOpen(true), setItemId(null) }}
                >
                    <div className="flex justify-center items-center gap-2 hover:scale-105 bg-primary-400 rounded-full px-4">
                        <span className="font-bold">+</span>
                        <span>Add new item</span>
                    </div>
                </div>
            </>
        )
    }
    if (isFormOpen) {
        let props = {
            setIsFormOpen,
            itemId,
            tableItems,
        }
        editFormView = (<ModuleTableItemsEditForm {...props} />)
    }

    return (
        <>
            <div className="mb-[1.6rem]">
                <div className="relative group/items">
                    <div className="flex bg-primary-400 h-10 items-center ">
                        <h2 className="w-2/5 px-2 "><strong>Description</strong></h2>
                        <div className="flex w-3/5">
                            <h2 className="w-1/3 flex justify-center py-1"><strong>HSN Code</strong></h2>
                            <h2 className="w-1/5 flex justify-center py-1"><strong>Qty</strong></h2>
                            <h2 className="w-1/3 flex justify-end py-1"><strong>Unit Price</strong></h2>
                            <h2 className="w-1/3 flex justify-end py-1 pr-2"><strong>Amount</strong></h2>
                        </div>
                    </div>
                    {headerActionButtonView}
                </div>
                {tableDataView}
                {editFormView}
            </div>
        </>
    )
}
