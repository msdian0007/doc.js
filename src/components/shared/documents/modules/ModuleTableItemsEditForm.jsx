import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTableItems, updateTableItems } from "../../../../store/document/reducer";
import { v4 as uuid } from 'uuid'

export const ModuleTableItemsEditForm = ({ setIsFormOpen, itemId, tableItems }) => {

    const [tableData, setTableData] = useState({
        id: uuid(),
        description: "",
        hsn_no: '',
        qty: '',
        unit_price: '',
        total: '',
    });
    const dispatch = useDispatch();
    var items = []
    items = tableItems

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setTableData((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (itemId) {
            const updatedItems = items.map((item) => item.id === tableData.id ? tableData : item)
            dispatch(updateTableItems(updatedItems))
        } else {
            dispatch(addTableItems(tableData))
        }
        setIsFormOpen(false)
    };


    const filterTableItems = () => {
        items.filter(item => item?.id === itemId ? setTableData(item) : null)
    }

    let { unit_price, qty } = tableData
    useEffect(() => {
        setTableData(prevValue => ({ ...prevValue, total: unit_price * qty }))
    }, [unit_price, qty])

    useEffect(() => {
        filterTableItems()
    }, [itemId])

    return (
        <>
            <div
                id="rdClose"
                className="bg_main fixed top-0 left-0 w-full h-full z-10 "
            >
                <form
                className="flex items-center h-full"
                    onSubmit={handleOnSubmit}
                >
                    <div className="bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative">
                        <div className="mx-auto flex justify-center">
                            <input
                                // pattern="^[a-zA-Z][a-zA-Z0-9&(),.:'\s]{1,200}"
                                className="bg-gray-200 w-full p-2 my-4 rounded-lg"
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={tableData.description}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-4">
                            <input
                                className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                type="number"
                                placeholder="HSN-No."
                                name="hsn_no"
                                min="1"
                                value={tableData.hsn_no}
                                onChange={handleOnChange}
                                required
                                list="hsnNum"
                            />
                            {/* <datalist className="overflow-x-scroll" id="hsnNum">
                                <option value="998311">
                                    Mgmt conslt & Svc incl financial, strategic, HR, MKT, OPS &
                                    supply chain mgmt
                                </option>
                                <option value="998312">
                                    Business consulting services including pubic relations
                                    services
                                </option>
                                <option value="998313">
                                    Information technology (IT) consulting and support services
                                </option>
                                <option value="998314">
                                    Information technology (IT) design and development services
                                </option>
                                <option value="998315">
                                    Hosting and information technology (IT) infrastructure
                                    provisioning services
                                </option>
                                <option value="998316">
                                    IT infrastructure and network management services
                                </option>
                                <option value="998319">
                                    Other information technology services n.e.c
                                </option>
                            </datalist> */}
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-4">
                            <input
                                className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                type="number"
                                placeholder="QTY"
                                name="qty"
                                min="1"
                                value={tableData.qty}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-4">
                            <input
                                className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                type="number"
                                placeholder="Unit Price"
                                name="unit_price"
                                min="1"
                                value={tableData.unit_price}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-4">
                            <input
                                pattern="[0-9]+"
                                className="bg-gray-200 p-2 my-4 rounded-lg col-span-2"
                                type="number"
                                placeholder="Total"
                                name="total"
                                value={tableData.total}
                                readOnly
                            />
                        </div>
                        <div className="mx-auto flex justify-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                                Add
                            </button>
                        </div>
                        <div className="absolute top-0 -right-6 cursor-pointer"
                            onClick={() => setIsFormOpen(false)}
                        >
                            <span className="close text-2xl text-white hover:text-red-800">
                                &times;
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
