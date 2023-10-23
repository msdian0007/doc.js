import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    type: '',
    basicDetails: {},
    senderDetails: {},
    receiverDetails: {},
    tableItems: [],
    paymentDetails: {},
    tAndCList: []
}
const docSlice = createSlice({
    name: 'doc',
    initialState,
    reducers: {
        typeOfDocument: (state, { payload }) => {
            state.type = payload
        },
        basicDetails: (state, { payload }) => {
            const { name, value } = payload;
            state.basicDetails = {
                ...state.basicDetails,
                [name]: value
            }
        },
        senderDetails: (state, { payload }) => {
            state.senderDetails = payload
        },
        receiverDetails: (state, { payload }) => {
            state.receiverDetails = payload
        },
        addTableItems: (state, { payload }) => {
            state.tableItems.push(payload)
        },
        updateTableItems: (state, { payload }) => {
            state.tableItems = payload
        },
        deleteTableItems: (state, { payload }) => {
            state.tableItems = payload
        },
        paymentDetailsReq: (state, { payload }) => {
            state.paymentDetails = payload
        },
        addConditionsReq: (state, { payload }) => {
            state.tAndCList.push(payload)
        },
        updateConditionsReq: (state, { payload }) => {
            state.tAndCList = payload
        },
        deleteConditionsReq: (state, { payload }) => {
            state.tAndCList = payload
        },
        clearFormReq: (state) => {
            return state = initialState
        }
    }
})

export const { typeOfDocument, basicDetails, senderDetails, receiverDetails, addTableItems, updateTableItems, deleteTableItems, paymentDetailsReq, addConditionsReq, updateConditionsReq, deleteConditionsReq, clearFormReq } = docSlice.actions
export default docSlice.reducer