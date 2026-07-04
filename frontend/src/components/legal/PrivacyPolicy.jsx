import LegalLayout, { Section } from "./LegalLayout";

const EMAIL = "blinkbear.app@gmail.com";

const Bullet = ({ children }) => (
  <li className="flex gap-3">
    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#FFB5A7] ring-2 ring-[#18181B]" />
    <span>{children}</span>
  </li>
);

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We don't collect any personal data. Your data never leaves your device."
      updated="June 2026"
    >
      <Section title="Overview">
        <p>
          This Privacy Policy applies to the BlinkBear mobile application and the BlinkBear website.
          BlinkBear ("we," "our," or "the app") is committed to protecting your privacy. This app is
          designed with privacy as a core principle.
        </p>
      </Section>

      <Section title="Data Controller">
        <p>
          For the purposes of applicable data protection laws, the developer of BlinkBear is the data
          controller. Since BlinkBear does not collect or process personal data, no personal data is
          controlled or stored by us.
        </p>
      </Section>

      <Section title="Data Collection">
        <p className="font-bold">
          BlinkBear does not collect, transmit, or share any personal information.
        </p>
        <p>
          All app data remains on your device and is never sent to our servers or any third parties.
          The app does not use analytics, cookies, tracking tools, or any third-party services
          (except Apple's StoreKit for in-app purchases, which is managed entirely by Apple).
        </p>
      </Section>

      <Section title="Data Stored Locally on Your Device">
        <p>The following information is stored locally on your device only:</p>
        <ul className="space-y-2">
          <Bullet><strong>App Preferences:</strong> Selected apps to monitor, monitoring settings, alert preferences (sound and haptic feedback), and theme customization choices.</Bullet>
          <Bullet><strong>Streak Statistics:</strong> Break completion statistics, current streak, longest streak, and unlocked milestone rewards.</Bullet>
          <Bullet><strong>In-App Purchases:</strong> Records of premium features you've purchased (managed by Apple).</Bullet>
        </ul>
        <p>
          This data is stored using iOS standard storage methods (UserDefaults and local files) within
          your device's secure app sandbox and shared App Group container. It is not identifiable, not
          transmitted anywhere, and only accessible by the app on your device.
        </p>
      </Section>

      <Section title="Screen Time API Usage">
        <p>BlinkBear uses Apple's Screen Time API (Family Controls framework) to:</p>
        <ul className="space-y-2">
          <Bullet>Monitor usage of apps you select.</Bullet>
          <Bullet>Display break reminders based on the 20-20-20 rule.</Bullet>
          <Bullet>Temporarily block selected apps during break times to encourage healthy screen habits.</Bullet>
        </ul>
        <p>
          Screen Time data is processed entirely on your device by iOS. We do not have access to your
          Screen Time data beyond what you explicitly configure within the app. No usage data is
          collected, transmitted, or stored by us.
        </p>
      </Section>

      <Section title="In-App Purchases">
        <p>
          BlinkBear offers optional in-app purchases for premium themes and icons. These transactions
          are processed securely by Apple through the App Store. We do not collect, access, or store
          your payment information. Your purchase history is managed by Apple and can be restored on
          your devices using your Apple ID.
        </p>
      </Section>

      <Section title="Data Sharing">
        <p>
          We do not share any data with third parties because we do not collect any data. No
          third-party services, SDKs, or analytics tools are integrated into this app.
        </p>
      </Section>

      <Section title="Data Security">
        <p>Since all data is stored locally on your device and never transmitted:</p>
        <ul className="space-y-2">
          <Bullet>Your data is protected by your device's built-in security (encryption, passcode/biometric protection).</Bullet>
          <Bullet>There is no risk of data breaches on our servers (we don't have servers).</Bullet>
          <Bullet>Your privacy is protected by default.</Bullet>
        </ul>
      </Section>

      <Section title="Children's Privacy">
        <p>
          BlinkBear does not knowingly collect personal information from children. Since all data
          remains on the device and no information is transmitted, the app is safe for users of all
          ages and complies with the Children's Online Privacy Protection Act (COPPA).
        </p>
      </Section>

      <Section title="Your Rights and Data Control">
        <ul className="space-y-2">
          <Bullet><strong>Access:</strong> All your data is visible within the app (preferences, statistics, purchases).</Bullet>
          <Bullet><strong>Deletion:</strong> You can delete all app data by uninstalling the app from your device.</Bullet>
          <Bullet><strong>Backup:</strong> Your data is automatically backed up with your device backups (if enabled).</Bullet>
          <Bullet><strong>No Server Data:</strong> No data exists on our servers, so there is nothing to request or delete from us.</Bullet>
        </ul>
        <p>
          Since BlinkBear does not collect or process personal data, GDPR and CCPA rights related to
          data access, portability, and deletion are generally not applicable. We respect your privacy
          regardless of your location.
        </p>
      </Section>

      <Section title="International Users">
        <p>
          BlinkBear can be used worldwide. Since no data is collected or transmitted, there are no
          international data transfer concerns. All processing occurs locally on your device.
        </p>
      </Section>

      <Section title="Website Usage">
        <p>
          The BlinkBear website is a static informational website. We do not use cookies, analytics,
          tracking tools, or contact forms. The hosting provider may collect technical information such
          as IP addresses and browser information as part of normal website delivery and security
          operations, processed in accordance with their own privacy policy. We do not have access to
          or control over this data.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in the app or legal
          requirements. Any changes will be reflected on this page with an updated date. Your continued
          use of the app after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Apple's Privacy Practices">
        <p>
          For information about how Apple handles data related to in-app purchases and the Screen Time
          API, please refer to the{" "}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-[#FFB5A7] decoration-2 underline-offset-2">
            Apple Privacy Policy
          </a>.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or privacy practices, please contact us at{" "}
          <a href={`mailto:${EMAIL}`} data-testid="privacy-contact-email" className="font-bold underline decoration-[#FFB5A7] decoration-2 underline-offset-2">
            {EMAIL}
          </a>
          . We will respond to privacy inquiries within 30 days.
        </p>
      </Section>

      <div className="mt-10 rounded-2xl border-4 border-[#18181B] bg-[#A1E3CB] p-6 shadow-[4px_4px_0_0_#18181B]">
        <p className="font-fredoka text-lg font-bold">Summary 🧸</p>
        <p className="mt-2 font-dm-sans text-[#18181B]/85">
          BlinkBear is designed to be completely private. Your data never leaves your device. We can't
          access, collect, or share your information because it simply doesn't come to us. No servers,
          no analytics, no tracking — just a helpful app that respects your privacy.
        </p>
      </div>
    </LegalLayout>
  );
}
