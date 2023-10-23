import { DocumentLayout } from "../../components/layout/DocumentLayout"
import { PageContainer } from "../../components/layout/PageContainer"
import { MainHeader } from "../../components/shared/headers/MainHeader"
import TitleAndLogo from "../../components/shared/documents/TitleAndLogo"
import { DetailsOfSenderAndReceiver } from "../../components/shared/documents/DetailsOfSenderAndReceiver"
import { TableOfItems } from "../../components/shared/documents/TableOfItems"
import { BillingSection } from "../../components/partials/documents/BillingSection"
import { SignAndBankDetails } from "../../components/shared/documents/SignAndBankDetails"
import { TermsAndConditions } from "../../components/shared/documents/TermsAndConditions"
import { ModuleDateDetails } from "../../components/shared/documents/modules/ModuleDateDetails"
import { useSelector } from "react-redux"

const header = (<MainHeader />)
const dateModule = (<ModuleDateDetails />)

export const CreateDocument = () => {
    const { basicDetails, tableItems, paymentDetails, senderDetails, receiverDetails, tAndCList, type } = useSelector((state) => state.document)
    return (
        <>
            <PageContainer {...{ header }}>
                <DocumentLayout>
                    <TitleAndLogo {...{ ...basicDetails, type }} />
                    <DetailsOfSenderAndReceiver {...{ senderDetails, receiverDetails, dateModule }} />
                    <TableOfItems {...{ tableItems }} />
                    <BillingSection {...{ tableItems, type }} />
                    <SignAndBankDetails {...{ ...paymentDetails, basicDetails }} />
                    <TermsAndConditions {...{ tAndCList }} />
                </DocumentLayout>
            </PageContainer>
        </>
    )
}
