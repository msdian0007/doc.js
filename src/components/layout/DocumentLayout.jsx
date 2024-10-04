import { useEffect, useRef, useState } from "react"
import { useReactToPrint } from 'react-to-print'
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useDispatch } from "react-redux";
import { clearFormReq, typeOfDocument } from "../../store/document/reducer";
import { useSearchParams } from "react-router-dom";
import { useDocumentHelper } from "../../hooks/useDocumentHelper";
import CachedIcon from '@mui/icons-material/Cached';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const DocumentLayout = ({ children }) => {
  const printPageRef = useRef()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [isClearForm, setIsClearFormOpen] = useState(false)
  const type = searchParams.get('type')
  const { documentValidation } = useDocumentHelper()

  const downloadPdf = useReactToPrint({
    content: () => printPageRef.current
  })

  const handleDownloadPDF = () => {
    const { isReady } = documentValidation()
    isReady ? downloadPdf() : toast.warn("all fields are mandatory!")
  }

  useEffect(() => {
    const { count } = documentValidation()
    count > 1 ? setIsClearFormOpen(true) : setIsClearFormOpen(false)
  }, [documentValidation])

  useEffect(() => {
    dispatch(typeOfDocument(type))
  }, [type])

  let clearFormButtonView, downloadButtonView
  if (isClearForm) {
    clearFormButtonView = (
      <>
        <div className="fixed left-0 top-0 w-full flex justify-center z-30 py-[3rem]">
          <CachedIcon
            titleAccess="Reset form"
            sx={{ fontSize: 30 }}
            className="p-2 text-white rounded-full shadow-md cursor-pointer bg-primary-500 shadow-primary-200 hover:scale-105"
            onClick={() => dispatch(clearFormReq())}
          />
        </div>
      </>
    )
  }

  downloadButtonView = (
    <>
      <div className="fixed right-[10px] bottom-[25px] z-30">
        <DownloadRoundedIcon
          titleAccess="download PDF"
          sx={{ fontSize: 40 }}
          className="p-2 text-white rounded-full shadow-md cursor-pointer bg-primary-500 hover:scale-105"
          onClick={handleDownloadPDF}
        />
      </div>
    </>
  )

  return (
    <>
      {/* Working Area */}
      <div className="relative bg-primary-100 min-h-screen max-w-full md:w-auto  overflow-x-scroll flex items-center py-[4rem] px-[2rem]">
        {downloadButtonView}
        {clearFormButtonView}

        {/* A4 Page workspace */}
        <div className="z-0 mx-auto shadow-lg shadow-slate-500">
          <div ref={printPageRef} >
            <div className="a4_size_class bg-white py-8 text-[0.875rem]">

              {/* Header */}
              <div className=" border-primary-400 border-[0.1rem]"></div>
              <div className="px-8 bg-white">
                {children}
                
                {/* Footer */}
                <div className=" border-primary-400 border-[0.1rem] mt-4"></div>
                <ToastContainer
                  hideProgressBar={true}
                  autoClose={2000}
                  position="top-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
