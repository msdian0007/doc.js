import { Link } from "react-router-dom"

export const DocTypeCard = ({ title, url, icon }) => {
    return (
        <>
            <div className="w-full max-w-sm bg-primary-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-4">
                    {icon}
                    <span className="text-[1.6rem] text-gray-500 dark:text-gray-400">{title}</span>
                    <Link to={url} className="flex mt-4 space-x-3 md:mt-6" >
                        <span className="inline-flex items-center px-4 py-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
