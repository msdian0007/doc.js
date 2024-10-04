import { useState } from "react";
import { useSelector } from "react-redux";

export const BillingSection = () => {
  const [discount, setDiscount] = useState(0);

  const { tableItems, type } = useSelector((state) => state.document);
  let total = 0,
    gst = 0,
    grand_total = 0,
    items = [],
    discount_amount = 0,
    discount_total = 0;
  items = tableItems;
  if (items.length > 0) {
    items.map((item) => {
      total += item.total;
    });
    discount_amount = (total * discount) / 100;
    discount_total = total - discount_amount;

    gst = (discount_total * 18) / 100;
    grand_total = discount_total + gst;
  }
  return (
    <>
      <div className="flex justify-end mb-[1.6rem]">
        <div className="w-3/5 ">
          <div className="flex bg-slate-100">
            <strong className="w-full px-2 py-1 border-b-2 bg-primary-400 ">
              Total
            </strong>
            <h2 className="flex justify-end w-1/3 px-1 py-1 border-t-2 border-b-2">
              {total.toLocaleString()}
            </h2>
          </div>
          <div
            className={`relative flex bg-slate-100 ${
              type !== "quotation" ? "hidden" : null
            }`}
          >
            <strong className="w-full px-2 py-1 border-b-2 bg-primary-400">
              Discount
            </strong>
            <div className="absolute left-24">
              <input
                className="px-2 py-1 outline-none w-14"
                type="number"
                placeholder=""
                name="disc"
                value={discount}
                onChange={(e) =>
                  e.target.value >= 0 && e.target.value <= 100
                    ? setDiscount(e.target.value)
                    : null
                }
              />
              <span className="absolute items-center my-1 right-1">%</span>
            </div>
            <h2 className="flex justify-end w-1/3 px-1 py-1 border-b-2">
              {discount_amount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
          <div className="flex bg-slate-100">
            <strong className="w-full px-2 py-1 border-b-2 bg-primary-400">
              GST-18%
            </strong>
            <h2 className="flex justify-end w-1/3 px-1 py-1 border-b-2">
              {gst.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
          <div className="flex bg-slate-100">
            <strong className="w-full px-2 py-1 bg-primary-400 ">
              Grand Total(Include Tax)
            </strong>
            <strong className="flex justify-end w-1/3 px-1 py-1 bg-primary-200">
              {"₹ " +
                grand_total.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};
