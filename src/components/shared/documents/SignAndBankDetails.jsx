import sign from '../../../public/img/vite.svg'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useRef, useState } from 'react';
import { ModulePaymentDetailsEditForm } from './modules/ModulePaymentDetailsEditForm';
import { useDispatch } from 'react-redux';
import { basicDetails as basicDetailsReq, paymentDetailsReq } from '../../../store/document/reducer';
import { Tooltip } from '@material-tailwind/react';

export const SignAndBankDetails = ({ account_number, bank_name, ifsc, gstin_no, basicDetails }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const dispatch = useDispatch()
    const inputRef = useRef()

    let actionButtonView, detailsView, editFormView
    if (account_number && bank_name) {
        actionButtonView = (
            <>
                <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">
                    <EditIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={() => { setIsFormOpen(true) }}
                    />
                    <DeleteIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={() => dispatch(paymentDetailsReq({}))}
                    />
                </div>
            </>
        )
        detailsView = (
            <>
                <div className="p-1">
                    <h2 className="">Bank & Payment Details</h2>
                    <table className="3/4">
                        <thead>
                            <tr>
                                <td>Account Number:</td>
                                <td>{account_number}</td>
                            </tr>
                            <tr>
                                <td>Bank Name:</td>
                                <td>{bank_name}</td>
                            </tr>
                            <tr>
                                <td>IFSC:</td>
                                <td>{ifsc}</td>
                            </tr>
                            <tr>
                                <td>GSTIN No:</td>
                                <td>{gstin_no}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </>
        )
    } else {
        actionButtonView = (
            <>
                <div
                    className='absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible'
                >
                    <AddIcon
                        className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                        sx={{ fontSize: 25, }}
                        onClick={() => { setIsFormOpen(true) }}
                    />
                </div>
            </>
        )
        detailsView = (
            <>
                <div className='grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100 h-auto w-auto min-w-[150px] '>
                    <AccountBalanceIcon className='col-span-1 mx-auto' sx={{ fontSize: 30 }} />
                    <span className='col-span-1 mx-auto' >Payment Details</span>
                </div>
            </>
        )
    }

    if (isFormOpen) {
        let formDetails
        if (account_number && bank_name) {
            formDetails = {
                account_number,
                bank_name,
                gstin_no,
                ifsc
            }
        }
        let props = {
            setIsFormOpen,
            formDetails
        }
        editFormView = (<ModulePaymentDetailsEditForm {...props} />)
    }

    const handleFileOnChange = (e) => {
        let { name, files } = e.target
        const imgUrl = URL.createObjectURL(files[0])
        dispatch(basicDetailsReq({ name, value: imgUrl }))
    }

    return (
        <>
            <div className="relative flex items-center justify-between mb-[1.6rem]">
                <div className="relative group/items">
                    {detailsView}
                    {actionButtonView}
                </div>
                <div className="mx-8">
                    <div className={`relative group/items w-full h-auto flex justify-center my-1 ${basicDetails?.digital_sign ? 'inline' : 'hidden'}`} >
                        <img className="max-w-[100px] max-h-[60px] " src={basicDetails?.digital_sign} alt="sign" />
                        <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">
                            <DeleteIcon
                                className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                                sx={{ fontSize: 25, }}
                                onClick={() => dispatch(basicDetailsReq({ name: 'digital_sign', value: '' }))}
                            />
                        </div>
                    </div>
                    <Tooltip content='Add Digital Sign' >
                        <b
                            className="mx-auto w-fit  cursor-pointer text-gray-500 border-t-2 border-t-slate-400  py-1"
                            onClick={() => inputRef.current.click()}
                        >
                            Authorized Signatory
                        </b>
                    </Tooltip>
                    <input name='digital_sign' type="file" accept='image/*' value='' readOnly hidden ref={inputRef} onChange={handleFileOnChange} />
                </div>
                {editFormView}
            </div>
        </>
    )
}
