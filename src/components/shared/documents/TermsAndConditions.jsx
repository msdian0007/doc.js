import GradingIcon from '@mui/icons-material/Grading';
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { v4 as uuid } from 'uuid'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addConditionsReq, deleteConditionsReq } from '../../../store/document/reducer';


export const TermsAndConditions = ({ tAndCList }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [itemId, setItemId] = useState(null)
    const dispatch = useDispatch()
    const [textAreaInp, setTextAreaInp] = useState({
        id: uuid(),
        tc: ''
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(addConditionsReq(textAreaInp))
        setTextAreaInp({
            id: uuid(),
            tc: ''
        })
    }

    const handleDeleteTableItems = (id) => {
        let updatedList = tAndCList.filter((item) => item.id !== id)
        dispatch(deleteConditionsReq(updatedList))
    }

    let actionButtonView, conditionsListView, conditionsEditView
    if (tAndCList?.length > 0 || isFormOpen) {
        actionButtonView = (
            <div className="relative group/items mb-[0.5rem]">
                <strong className="  ">Terms & Conditions</strong>
                <div className="absolute left-[150px] top-0">
                    <div
                        className="flex justify-center items-center invisible group-hover/items:visible gap-2 hover:scale-105 bg-primary-400 rounded-full px-4 cursor-pointer"
                        onClick={() => setIsFormOpen(true)}
                    >
                        <span className="font-bold">+</span>
                        <span>Add new t&c</span>
                    </div>
                </div>
            </div>
        )
        conditionsListView = (
            <ol className="text-xs list-disc">
                {tAndCList?.map(({ id, tc }) => (
                    <div className='relative group/items' key={id}>
                        <li className="ml-5 break-words" key={id}>
                            {tc}
                        </li>
                        <div className="absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible">
                            {/* <EditIcon
                                className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-yellow-500"
                                sx={{ fontSize: 20, }}
                                onClick={() => { setIsFormOpen(true), setItemId(id) }}
                            /> */}
                            <DeleteIcon
                                className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-red-500"
                                sx={{ fontSize: 20, }}
                                onClick={() => handleDeleteTableItems(id)}
                            />
                        </div>
                    </div>
                ))}
            </ol>
        )
    } else {
        if (!isFormOpen) {
            actionButtonView = (
                <div className='relative group/items h-auto w-auto max-w-[150px] mb-6'>
                    <div className='grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100  '>
                        <GradingIcon className='col-span-1 mx-auto' sx={{ fontSize: 30 }} />
                        <span className='col-span-1 mx-auto' >T&C</span>
                    </div>
                    <div
                        className='absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible'
                    >
                        <AddIcon
                            className="bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white"
                            sx={{ fontSize: 25, }}
                            onClick={() => { setIsFormOpen(true) }}
                        />
                    </div>
                </div>
            )

        }
        conditionsListView = (
            <>

            </>
        )
    }
    if (isFormOpen) {
        conditionsEditView = (
            <div className=' mb-8'>
                <form onSubmit={handleOnSubmit}>
                    <div className='relative w-fit'>
                        <textarea
                            className='border-[0.2rem] border-primary-100 p-1 focus:border-primary-400 outline-none'
                            name="tc" id="T&C" cols="40" rows="2" value={textAreaInp.tc} required
                            onChange={(e) => setTextAreaInp({ ...textAreaInp, [e.target.name]: e.target.value })}
                        />
                        <div className="absolute z-10 -bottom-5 right-0 flex justify-center items-center gap-2 ">
                            <button type='submit' >
                                <DoneIcon
                                    className="bg-primary-500 hover:scale-110 w-5 rounded-md cursor-pointer text-white"
                                    sx={{ fontSize: 20 }}
                                />
                            </button>
                            <CloseIcon
                                className="bg-primary-500 hover:scale-110 rounded-md cursor-pointer text-white"
                                sx={{ fontSize: 20 }}
                                onClick={() => setIsFormOpen(false)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )

        if (tAndCList?.length > 0) {
            actionButtonView = (
                <div className="relative group/items">
                    <strong className=" ">Terms & Conditions</strong>
                    <div className="absolute left-[150px] top-0">
                        <div className="flex justify-center items-center invisible group-hover/items:visible gap-2 hover:scale-105 bg-primary-400 rounded-full px-4 cursor-pointer">
                            <span className="font-bold">+</span>
                            <span>Add new t&c</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            <div className="mb-[1.6rem]">
                <div>
                    {actionButtonView}
                </div>
                <div>
                    {conditionsListView}
                </div>
                {conditionsEditView}
            </div>
        </>
    )
}
