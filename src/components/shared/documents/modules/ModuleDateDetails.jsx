import { useDispatch, useSelector } from "react-redux"
import { setBasicDetails } from "../../../../store/document/reducer"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export const ModuleDateDetails = () => {
    const dispatch = useDispatch()
    const { date, due_date } = useSelector((state) => state.document.basicDetails)

    return (
        <>
            <div className="relative h-full group/items">
                <div className="grid content-end grid-cols-2 text-end">
                    <strong className="col-span-2">Issue date:</strong>
                    <div className="col-span-1"></div>
                    <div className="relative col-span-1">
                        <div className={` border-primary-100 rounded-lg ${date ? 'border-0' : 'border-2'}`}>
                            <DatePicker
                                selected={date}
                                onChange={(date) => dispatch(setBasicDetails({ name: 'date', value: date }))}
                                placeholderText="mm-dd-yyyy"
                                todayButton="Today"
                                className="bg-transparent text-right w-3/4 text-[0.875rem]"
                            />
                        </div>
                    </div>
                    <strong className="col-span-2">Due date:</strong>
                    <div className="col-span-1"></div>
                    <div className="relative col-span-1">
                        <div className={` border-primary-100 rounded-lg ${due_date ? 'border-0' : 'border-2'}`}>
                            <DatePicker
                                selected={due_date}
                                onChange={(date) => dispatch(setBasicDetails({ name: 'due_date', value: date }))}
                                placeholderText="mm-dd-yyyy"
                                todayButton="Today"
                                className="bg-transparent text-right w-3/4 text-[0.875rem]"
                            />
                        </div>
                    </div>
                    {/* <label className="col-span-2" hidden={!qtn_number}>Qtn Ref. No:</label>
                    <input className="col-span-2 bg-white text-end" type="text" placeholder="qtn number" value={qtn_number} hidden={!qtn_number} /> */}
                </div>
            </div>
        </>
    )
}

