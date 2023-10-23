import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { ModuleDetailsEditForm } from "./ModuleDetailsEditForm";
import { useDispatch } from "react-redux";
import { receiverDetails, senderDetails } from "../../../../store/document/reducer";
// import { useSelector } from "react-redux";

export const ModuleAddressDetails = ({ buttonDetails, type, cName, address, locality, city, state, zip_code, country }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const dispatch = useDispatch()
    const handleDeleteDetails = () => {
        if (type === 'sender') return dispatch(senderDetails({}))
        dispatch(receiverDetails({}))
    }

    let actionButtonView, editFormView, addressDetails
    if (!cName && !address) {
        actionButtonView = (
            <>
                <div
                    className='absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible'
                >
                    <AddIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={() => { setIsFormOpen(true) }}
                    />
                </div>
            </>
        )
        addressDetails = (buttonDetails)
    } else {
        actionButtonView = (
            <>
                <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">

                    <EditIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={() => setIsFormOpen(true)}
                    />

                    <DeleteIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={handleDeleteDetails}
                    />
                </div>
            </>
        )
        addressDetails = (
            <>
                <div className="p-1">
                    <div className="inline break-words">
                        <b>{cName}</b><br />
                        <span>{address}</span><br />
                        <span>{locality},</span><br />
                        <span>{city}, </span>
                        <span>{state}, </span>
                        <span>{zip_code}</span><br />
                    </div>
                </div>
            </>
        )
    }

    if (isFormOpen) {
        let formDetails
        if (cName && address) {
            formDetails = {
                cName,
                address,
                locality,
                city,
                state,
                zip_code,
                country
            }
        }
        let props = {
            setIsFormOpen,
            type,
            formDetails
        }
        editFormView = <ModuleDetailsEditForm {...props} />
    }

    return (
        <>
            <div className="relative group/items ">
                {addressDetails}
                {actionButtonView}
                {editFormView}
            </div>
        </>
    )
}
