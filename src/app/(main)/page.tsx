import { CallToAction } from '@/components/call-to-action';
import { Guide } from '@/components/guide';
import { LinkAccountGuide } from '@/components/link-account-guide';
import { ChooseUs } from '@/components/choose-us';
import { NavigateAppIntroduce } from '@/components/navigate-app-introduce';
import { EnquiryForm } from '@/components/enquiry-form';

export default function Home() {
  return (
    <>
      <main>
        <CallToAction />
      </main>
      <Guide />
      <LinkAccountGuide />
      <ChooseUs />
      <NavigateAppIntroduce />
      <EnquiryForm />
    </>
  );
}
