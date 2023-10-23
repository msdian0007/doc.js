import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paymentDetailsReq, receiverDetails, senderDetails } from "../../../../store/document/reducer";



export const ModulePaymentDetailsEditForm = ({ setIsFormOpen, formDetails }) => {

    const data = {
        account_number: '',
        bank_name: '',
        ifsc: '',
        gstin_no: '',
    }
    const [formData, setFormData] = useState(data);
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(paymentDetailsReq(formData))
        setIsFormOpen(false)
    };

    useEffect(() => {
        !formDetails ? null : setFormData(formDetails)
    }, [formDetails])

    return (
        <>
            <div>
                <div
                    id="rdClose"
                    className="bg_main fixed top-0 left-0 w-full h-full z-10 "
                >
                    <form className="flex items-center h-full" id="moduleDetailsEditForm" action="" onSubmit={handleOnSubmit}>
                        <div className="bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative">
                            <div className="mx-auto flex justify-center">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="bg-gray-200 w-full p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="Account Number"
                                    name="account_number"
                                    value={formData.account_number}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="Bank Name"
                                    name="bank_name"
                                    value={formData.bank_name}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="IFSC"
                                    name="ifsc"
                                    value={formData.ifsc}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="GSTIN No."
                                    name="gstin_no"
                                    value={formData.gstin_no}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="mx-auto flex justify-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                                    Add
                                </button>
                            </div>

                            <div className="absolute top-0 -right-8">
                                <span
                                    className="close text-2xl pl-1 text-white hover:text-red-800 cursor-pointer"
                                    onClick={() => setIsFormOpen(false)}
                                >
                                    &times;
                                </span>
                                <br />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
