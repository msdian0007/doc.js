import { useState } from "react"
import { useSelector } from "react-redux"


export const useDocumentHelper = () => {
    const document = useSelector((state) => state.document)
    const { basicDetails, tableItems, paymentDetails, senderDetails, receiverDetails, tAndCList, type } = document

    return {
        documentValidation: () => {
            let numOfObjects = Object.keys(document).length
            function check(obj, value) {
                return Object.keys(obj).length == value
            }
            let count = 0
            for (let i = 0; i < 1; i++) {
                if (check(basicDetails, 5)) {
                    count++
                }
                if (tableItems.length > 0) {
                    count++
                }
                if (check(paymentDetails, 4)) {
                    count++
                }
                if (check(senderDetails, 7)) {
                    count++
                }
                if (check(receiverDetails, 7)) {
                    count++
                }
                if (tAndCList.length > 0) {
                    count++
                }
                if (type) {
                    count++
                }
                if (count === numOfObjects) {
                    return { isReady: true, count }
                }
            }
            return { isReady: false, count }
        }
    }
}
