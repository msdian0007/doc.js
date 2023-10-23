import { ReceiverButton, SenderButton } from "../../partials/documents/SenderAndReceiverButtons"
import { ModuleAddressDetails } from "./modules/ModuleAddressDetails"

const senderButtonDetails = (<SenderButton />)
const receiverButtonDetails = (<ReceiverButton />)

export const DetailsOfSenderAndReceiver = ({ senderDetails, receiverDetails, dateModule }) => {
    // const { senderDetails, receiverDetails } = document
    return (
        <>
            <div className="grid grid-cols-12 gap-2 mb-[1.6rem]">
                <div className="col-span-4">
                    <ModuleAddressDetails {...{ buttonDetails: senderButtonDetails, type: 'sender', ...senderDetails }} />
                </div>
                <div className="col-span-4">
                    <ModuleAddressDetails {...{ buttonDetails: receiverButtonDetails, type: 'receiver', ...receiverDetails }} />
                </div>
                <div className="col-span-4">
                    {dateModule}
                </div>
            </div>
        </>
    )
}
