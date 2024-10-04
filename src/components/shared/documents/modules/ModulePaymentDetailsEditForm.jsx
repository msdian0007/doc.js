import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paymentDetailsReq } from "../../../../store/document/reducer";



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
                    className="fixed top-0 left-0 z-10 w-full h-full bg_main "
                >
                    <form className="flex items-center h-full" id="moduleDetailsEditForm" action="" onSubmit={handleOnSubmit}>
                        <div className="relative w-3/4 p-4 mx-auto rounded-lg bg-white/70 sm:w-3/5 md:w-1/2 lg:w-1/3">
                            <div className="flex justify-center mx-auto">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="w-full p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Account Number"
                                    name="account_number"
                                    value={formData.account_number}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Bank Name"
                                    name="bank_name"
                                    value={formData.bank_name}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="IFSC"
                                    name="ifsc"
                                    value={formData.ifsc}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="GSTIN No."
                                    name="gstin_no"
                                    value={formData.gstin_no}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="flex justify-end mx-auto">
                                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
                                    Add
                                </button>
                            </div>

                            <div className="absolute top-0 -right-8">
                                <span
                                    className="pl-1 text-2xl text-white cursor-pointer close hover:text-red-800"
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
