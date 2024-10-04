import { DocumentLayout, PageContainer } from "../../components/layout";
import {
  DetailsOfSenderAndReceiver,
  MainHeader,
  SignAndBankDetails,
  TableOfItems,
  TermsAndConditions,
  TitleAndLogo
} from "../../components/shared";
import { BillingSection } from "../../components/partials";

const header = <MainHeader />;

export const CreateDocument = () => {
  return (
    <>
      <PageContainer {...{ header }}>
        <DocumentLayout>
          <TitleAndLogo />
          <DetailsOfSenderAndReceiver />
          <TableOfItems />
          <BillingSection />
          <SignAndBankDetails />
          <TermsAndConditions />
        </DocumentLayout>
      </PageContainer>
    </>
  );
};
