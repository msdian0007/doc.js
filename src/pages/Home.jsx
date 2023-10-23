import { PageContainer } from "../components/layout/PageContainer"
import { DocTypeCard } from "../components/partials/cards/DocTypeCard"
import { MainHeader } from "../components/shared/headers/MainHeader"
import DescriptionIcon from '@mui/icons-material/Description';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { Link } from "react-router-dom"

const CardDetails = [
    {
        title: "invoice",
        url: "document",
        icon: <DescriptionIcon sx={{ fontSize: 30 }} className="w-24 h-24 mb-3 rounded-full shadow-lg" />
    },
    {
        title: "quotation",
        url: "document",
        icon: <DescriptionIcon sx={{ fontSize: 30 }} className="w-24 h-24 mb-3 rounded-full shadow-lg" />
    },
    {
        title: "coming soon",
        url: null,
        icon: <HourglassTopIcon sx={{ fontSize: 30 }} className="w-24 h-24 mb-3 rounded-full shadow-lg" />
    },
    {
        title: "coming soon",
        url: null,
        icon: <HourglassTopIcon sx={{ fontSize: 30 }} className="w-24 h-24 mb-3 rounded-full shadow-lg" />
    },
]
const headers = (
    <>
        <MainHeader />
    </>
)

let CardComponent = ({ icon, url, title }) => (
    <div className="relative group/items w-full px-[4rem] sm:px-[2rem] py-[1rem] bg-primary-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
        </div>
        <div className="flex flex-col items-center pb-4">
            {icon}
            <span className=" text-gray-500 dark:text-gray-400">{title}</span>
        </div>
        <div className={`absolute w-full h-full top-0 left-0 bg-black/80 rounded-lg flex justify-center items-center group-hover/items:visible invisible ${!url ? 'hidden' : 'inline'}`}>
            <Link to={{ pathname: url, search: `type=${title}` }} >
                <span className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create</span>
            </Link>
        </div>
    </div>
)

export const Home = () => {
    let cardView = CardDetails.map((data, i) => {
        return <CardComponent {...data} key={i} />
    })

    return (
        <>
            <PageContainer header={headers}>
                <div className="flex justify-center min-h-screen items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] text-center py-[2rem] mx-[1rem] 3xl:scale-150">
                        {cardView}
                    </div>
                </div>
            </PageContainer>
        </>
    )
}
