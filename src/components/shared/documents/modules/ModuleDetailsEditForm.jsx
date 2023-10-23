import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receiverDetails, senderDetails } from "../../../../store/document/reducer";


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
            dispatch(senderDetails(formData))
        } else {
            dispatch(receiverDetails(formData))
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
                    className="bg_main fixed top-0 left-0 w-full h-full z-10 "
                >
                    <form className="flex h-full items-center" id="moduleDetailsEditForm" action="" onSubmit={handleOnSubmit}>
                        <div className="bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative">
                            <div className="mx-auto flex justify-center">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="bg-gray-200 w-full p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="Name/Company Name"
                                    name="cName"
                                    value={formData.cName}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    // pattern="^[a-zA-Z][a-zA-Z0-9-_.\s]{1,50}$"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    // pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="Locality"
                                    name="locality"
                                    value={formData.locality}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="mx-auto grid grid-cols-4 gap-4">

                                <input
                                    pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleOnChange}
                                />
                                <input
                                    pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleOnChange}
                                    required
                                />
                                <input
                                    pattern="[0-9]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="Post Code"
                                    name="zip_code"
                                    value={formData.zip_code}
                                    onChange={handleOnChange}
                                    required
                                />
                                <input
                                    pattern="[A-Za-z]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg"
                                    type="text"
                                    placeholder="Country/Region"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                            {/* <div className="mx-auto grid grid-cols-3 gap-4">
                                <input
                                    pattern="[0-9]+"
                                    className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                    type="text"
                                    placeholder="GSTIN No."
                                    name="gst_no"
                                    value={formData.gst_no}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div> */}
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
