import { useSelector } from "react-redux";
import { ModuleAddressDetails } from "./modules/ModuleAddressDetails";
import { ReceiverButton, SenderButton } from "../../partials";
import { ModuleDateDetails } from "./modules/ModuleDateDetails";

export const DetailsOfSenderAndReceiver = () => {
  const { senderDetails, receiverDetails } = useSelector(
    (state) => state.document
  );
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mb-[1.6rem]">
        <div className="col-span-4">
          <ModuleAddressDetails
            type={"sender"}
            initialButton={<SenderButton />}
            data={senderDetails}
          />
        </div>
        <div className="col-span-4">
          <ModuleAddressDetails
            type={"receiver"}
            initialButton={<ReceiverButton />}
            data={receiverDetails}
          />
        </div>
        <div className="col-span-4">
          <ModuleDateDetails />
        </div>
      </div>
    </>
  );
};
