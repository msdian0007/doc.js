import { useState } from "react"

export const BillingSection = ({ tableItems, type }) => {
    const [discount, setDiscount] = useState(0)
    let total = 0, gst = 0, grand_total = 0, items = [], discount_amount = 0, discount_total = 0
    items = tableItems
    if (items.length > 0) {
        items.map((item) => {
            total += item.total
        })
        discount_amount = ((total * discount) / 100)
        discount_total = total - discount_amount

        gst = (discount_total * 18) / 100
        grand_total = discount_total + gst

    }
    return (
        <>
            <div className="flex justify-end mb-[1.6rem]">
                <div className="w-3/5 ">
                    <div className="flex bg-slate-100">
                        <strong className="w-full py-1 px-2 bg-primary-400 border-b-2 ">Total</strong>
                        <h2 className="w-1/3 flex justify-end py-1 border-b-2 border-t-2 px-1">
                            {total.toLocaleString()}
                        </h2>
                    </div>
                    <div className={`relative flex bg-slate-100 ${type !== 'quotation' ? 'hidden' : null}`}>
                        <strong className="w-full py-1 px-2 bg-primary-400 border-b-2">
                            Discount
                        </strong>
                        <div className="absolute left-24">
                            <input
                                className="w-14 outline-none py-1 px-2"
                                type="number"
                                placeholder=""
                                name="disc"
                                value={discount}
                                onChange={(e) => e.target.value >= 0 && e.target.value <= 100 ? setDiscount(e.target.value) : null}
                            />
                            <span className="absolute right-1 items-center my-1">%</span>
                            {/* <div
                                className="no_print absolute px-2 -right-56 cursor-pointer top-1 bg-green-600 text-slate-200 rounded-md scale-75 shadow-md hover:scale-90 hover:bg-green-500"
                            // onClick={handleOnClickApplyDisc}
                            >
                                <span>Apply Discount</span>
                            </div> */}
                        </div>
                        <h2 className="w-1/3 flex justify-end py-1 border-b-2 px-1">
                            {discount_amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </h2>
                    </div>
                    <div className="flex bg-slate-100">
                        <strong className="w-full py-1 px-2 bg-primary-400 border-b-2">
                            GST-18%
                        </strong>
                        <h2 className="w-1/3 flex justify-end py-1 border-b-2 px-1">
                            {gst.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </h2>
                    </div>
                    <div className="flex bg-slate-100">
                        <strong className="w-full py-1 px-2 bg-primary-400 ">
                            Grand Total(Include Tax)
                        </strong>
                        <strong className="w-1/3 flex justify-end py-1 px-1 bg-primary-200">
                            {"₹ " +
                                grand_total.toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                })}
                        </strong>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-end mb-[1.6rem]">
                <div className="w-3/5 ">
                    <div className="flex bg-slate-100">
                        <h2 className="w-full py-1 px-2 bg-primary-400 border-b-2">
                            Total
                        </h2>
                        <h2 className="w-1/3 flex justify-end py-1 border-b-2 px-1">
                            {total.toLocaleString()}
                        </h2>
                    </div>
                    <div className="flex bg-slate-100">
                        <h2 className="w-full py-1 px-2 bg-primary-400 border-b-2">
                            GST-18%
                        </h2>
                        <h2 className="w-1/3 flex justify-end py-1 border-b-2 px-1">
                            {gst.toLocaleString()}
                        </h2>
                    </div>
                    <div className="flex bg-slate-100">
                        <h2 className="w-full py-1 px-2 bg-primary-400 ">
                            Grand Total(Include Tax)
                        </h2>
                        <h2 className="w-1/3 flex justify-end py-1 px-1 bg-primary-200">
                            {"₹ " + grand_total.toLocaleString()}
                        </h2>
                    </div>
                </div>
            </div> */}
        </>
    )
}
