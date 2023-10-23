import { useState } from "react"

const data = {
    senderDetails: {},
    receiverDetails: {},
}

export const useDocumentData = () => {
    const [loading, setLoading] = useState(false)
    const [docData, setDocData] = useState({})
    // console.log(docData);
    return {
        loading,
        docData,
        setDocData: (payload) => {
            setDocData(payload)
        },
        // setLoading: (payload) => {
        //     setLoading(payload)
        // }
    }
}