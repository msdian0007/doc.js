import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setReceiverDetails, setSenderDetails } from "../../../../store/document/reducer";


const data = {
    cName: '',
    address: '',
    locality: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
}

export const ModuleDetailsEditForm = ({ setIsFormOpen, type, formDetails }) => {

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
        if (type === 'sender') {
            dispatch(setSenderDetails(formData))
        } else {
            dispatch(setReceiverDetails(formData))
        }
        setIsFormOpen(false)
    };

    useEffect(() => {
        formDetails ? setFormData(formDetails) : null
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
                                    placeholder="Name/Company Name"
                                    name="cName"
                                    value={formData.cName}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Locality"
                                    name="locality"
                                    value={formData.locality}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4 mx-auto">

                                <input
                                    pattern="[A-Za-z]+"
                                    className="p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleOnChange}
                                />
                                <input
                                    pattern="[A-Za-z]+"
                                    className="p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleOnChange}
                                    required
                                />
                                <input
                                    pattern="[0-9]+"
                                    className="p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Post Code"
                                    name="zip_code"
                                    value={formData.zip_code}
                                    onChange={handleOnChange}
                                    required
                                />
                                <input
                                    pattern="[A-Za-z]+"
                                    className="p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="Country/Region"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            {/* <div className="grid grid-cols-3 gap-4 mx-auto">
                                <input
                                    pattern="[0-9]+"
                                    className="col-span-2 p-2 my-4 bg-gray-200 rounded-lg"
                                    type="text"
                                    placeholder="GSTIN No."
                                    name="gst_no"
                                    value={formData.gst_no}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div> */}
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
