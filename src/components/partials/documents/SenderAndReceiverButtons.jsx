import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export const SenderButton = () => {
    return (
        <div className=" p-4 border-2 border-primary-100 mx-auto cursor-pointer">
            <span>To,</span>
            <div className="flex gap-4 ml-4 items-center">
                <div className="">
                    <ForwardToInboxIcon sx={{ fontSize: 30 }} />
                </div>
                <span>Sender Details</span>
            </div>
        </div>
    )
}

export const ReceiverButton = () => {
    return (
        <div className=" p-4 border-2 border-primary-100 mx-auto cursor-pointer">
            <span>To,</span>
            <div className="flex gap-4 ml-4 items-center">
                <div className="">
                    <PersonIcon sx={{ fontSize: 30 }} />
                </div>
                <span>Receiver Details</span>
            </div>
        </div>
    )
}

export const DateIcon = () => (
    <div className="flex justify-end items-center border-2 px-6 py-7 h-full">
        <div
            className="w-6 scale-150 hover:text-orange-400 cursor-pointer"
        >
            <CalendarMonthRoundedIcon />
        </div>
    </div>
)
