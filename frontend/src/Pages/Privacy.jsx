import line from "../assets/line.svg";
import { motion } from "framer-motion";
const Privacy = () => {
  return (
    <div className="bg-[var(--main-gray)] h-screen w-1/2 mx-auto flex flex-col items-center  ">
      <div className="my-15 flex flex-col items-center justify-center">
        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,

            type: "tween",
            ease: "easeInOut",
          }}
          className="text-5xl text-[var(--main-black)] font-bold text-center tracking-wide "
        >
          Privacy Policy
        </motion.h1>
        <motion.img
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,

            type: "tween",
            ease: "easeInOut",
          }}
          className="w-full"
          src={line}
          alt=""
        />
      </div>
      <motion.p
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.7,

          type: "tween",
          ease: "easeInOut",
        }}
      >
        Thanks for joining e-learning! We at e-learning respect your privacy and
        want you to understand how we collect, use, and share data about you.
        This Privacy Policy covers our data collection practices and describes
        your rights regarding your personal data.
      </motion.p>
      <div className="my-10">
        {privacy.map((item, index) => (
          <div className="my-10">
            <motion.h2
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,

                type: "tween",
                ease: "easeInOut",
              }}
              className="text-xl font-semibold text-[var(--light-purple)] my-3"
            >
              {index + 1}.{item.title}
            </motion.h2>
            <motion.p
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="text-[#4A5568]"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;

const privacy = [
  {
    title: "How We Get Data About You",
    description:
      "We use tools like cookies, web beacons, and similar tracking technologies to gather data. Some of these tools allow you to opt out of data collection.",
  },
  {
    title: "Cookies and Data Collection Tools",
    description:
      "We use cookies, which are small text files stored by your browser, to collect, store, and share data about your activities across websites, including on e-learning. They help us remember your preferences and make the site easier to use. We may also use clear pixels in emails to track deliverability and open rates. e-learning and its service providers use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons ('Data Collection Tools') when you use the Services. These tools automatically track and collect certain System Data and Usage Data. In some cases, we link data from these tools to other data we collect as described in this Privacy Policy.",
  },
  {
    title: "Why We Use Data Collection Tools",
    description:
      "e-learning uses various Data Collection Tools for specific purposes:",
  },
  {
    title: "Strictly Necessary",
    description:
      "These tools enable site access, provide basic functionality (like logging in), secure the site, protect against fraudulent logins, and prevent abuse. They are essential for the Services to function correctly; disabling them will impact site features.",
  },
  {
    title: "Functional",
    description:
      "These tools remember your browser data and preferences, offer additional site functionality, customize content, and recall settings like language or video volume.",
  },
  {
    title: "Performance",
    description:
      "These tools help measure and improve the Services by providing usage and performance data, visit counts, traffic sources, and application download locations. They also help us test different e-learning versions and track email open rates.",
  },
  {
    title: "Advertising",
    description:
      "These tools deliver relevant ads (on and off the site) based on your Usage and System Data and information ad service providers have about you. Ads can be based on your recent activity or activity over time and across other sites. We may provide hashed, anonymized email addresses and publicly shared content to these providers for tailored advertising.",
  },
  {
    title: "Social Media",
    description:
      "These tools enable social media functionality, such as sharing content. They may track users or devices across sites and build profiles for targeted advertising. You can control cookies through your web browser settings. Disabling them may limit or change your experience on the Services. Refer to Section 6.1 for more information on managing Data Collection Tools.",
  },
  {
    title: "What We Use Your Data For",
    description:
      "We use your data to provide Services, communicate with you, troubleshoot issues, prevent fraud and abuse, improve and update our Services, analyze usage, serve personalized advertising, and as required by law or for safety and integrity. We retain your data as long as needed for these purposes. If you have an e-learning account, we will delete your data upon account termination, or longer if required by law or for safety and integrity. We use collected data to: provide and administer Services (including facilitating content participation, issuing certificates, displaying customized content, and communication); process payments; process requests and orders; communicate about your account (responding to questions, sending administrative messages, notifications, and promotional information); manage account preferences and personalize your experience; facilitate technical functioning (troubleshooting, security, fraud prevention); verify instructor identity; solicit feedback; market products, services, and promotions; market Subscription Plans; learn more about you by linking data with third-party providers; identify unique users across devices; tailor advertisements; improve Services and develop new features (including through AI); analyze trends and traffic; advertise Services on third-party sites; and as required or permitted by law, or to ensure safety and integrity. We may process your inputs into our generative artificial intelligence (GenAI) features to respond to your requests, but we do not use your personal data to train or fine-tune GenAI models.",
  },
  {
    title: "Who We Share Your Data With",
    description:
      "We share certain data with instructors, other students, service providers, e-learning affiliates, business partners, analytics and data enrichment providers, social media providers, and advertising companies. We may also share data for security, legal compliance, or corporate restructuring. Additionally, we can share aggregated or de-identified data, or if we have your consent. We may share your data with third parties under these circumstances: **With Your Instructors:** We share data (excluding email) with instructors for content you access, helping them improve their content. This includes country, browser language, operating system, device settings, referral site, enrolled courses, and reviews. **With Other Students and Instructors:** Your Shared Content and profile data may be publicly viewable depending on your settings. **With Service Providers, Contractors, and Agents:** Third-party companies performing services for us (e.g., payment processing, fraud prevention, marketing) access your data, but are required to use it only as directed and protect it consistent with this Privacy Policy. **With e-learning Affiliates:** We may share data within our corporate family to provide Services. **With Business Partners:** We have agreements with other websites to distribute our Services and drive traffic to e-learning; we may share your data with these partners based on your location. **With Credit-Granting Organizations for Continuing Education:** If you take a course for continuing professional education, we may share that information upon request. **With Analytics and Data Enrichment Services:** We share certain contact or de-identified data with third-party analytics tools (like Google Analytics) and data enrichment services (like ZoomInfo) to provide analytics or match your data with publicly available information for effective and customized communication and marketing. **To Power Social Media Features:** Third-party social media features may collect your IP address and page visits, and set cookies. Interactions are governed by the third-party's privacy policy. **To Administer Promotions and Surveys:** We may share your data as necessary to administer promotions and surveys you participate in, as required by law or promotion rules. **For Advertising:** If we adopt an advertising-supported model, we may use and share System Data and Usage Data with third-party advertisers to show general demographic and preference information. We may also allow advertisers to collect System Data via Data Collection Tools for targeted ads and web analytics. Advertisers may also share data they collect about you with us. **For Security and Legal Compliance:** We may disclose your data to third parties if we believe it's requested as part of a legal inquiry, necessary to enforce our terms, prevent fraud, or protect e-learning, our users, or the public. We may also disclose data to auditors and legal advisors. **During a Change in Control:** In case of a business transaction like a merger or sale, we may share or transfer your data to the successor organization. **After Aggregation/De-identification:** We may disclose or use aggregated or de-identified data for any purpose. **With Your Permission:** With your consent, we may share data with third parties outside the scope of this Privacy Policy. If you click on third-party links, their privacy policy governs their data collection.",
  },
  {
    title: "Security",
    description:
      "We use appropriate security measures based on data type and sensitivity. However, no system is 100% secure. It's crucial to protect your password and contact us if you suspect unauthorized account access. e-learning takes appropriate security measures against unauthorized access, alteration, disclosure, or destruction of your personal data. These measures vary by data type and sensitivity. While no system is perfectly secure, we cannot guarantee completely secure communications or information. Your password is vital to our security; protect it and do not share it. If your password or account is compromised, change it immediately and contact our Support Team.",
  },
  {
    title: "Your Rights",
    description:
      "You may have rights regarding your data, including opting out of promotional emails, certain cookies, and third-party data collection. You can update or terminate your account via our Services or contact us for individual rights requests. Parents who believe we've unintentionally collected personal data about their underage child should contact us for assistance.",
  },
  {
    title: "Your Choices About the Use of Your Data",
    description:
      "You can choose not to provide certain data, but it may limit your use of some Services features. To stop promotional communications, use the unsubscribe link in the email or change your account's email preferences. We will still send transactional and relationship messages. If you're in the European Economic Area, you can opt out of certain Data Collection Tools via the 'Cookie settings' link. Your browser or device may allow you to control cookies and other local data storage. For tailored advertising from participating companies, refer to consumer opt-out pages like the Network Advertising Initiative and Digital Advertising Alliance. For Google, visit the Google Ads Settings page; for Taboola, see their Cookie Policy. To opt out of Google Analytics, Mixpanel, ZoomInfo, or Clearbit using your data for analytics or enrichment, refer to their respective opt-out options. Device-specific instructions for controlling in-app tailored advertising are available for Apple iOS, Android OS, and Microsoft Windows. For other devices, review your privacy settings on that platform. For questions about your data or rights, contact us at privacy@e-learning.com.",
  },
  {
    title: "Accessing, Updating, and Deleting Your Personal Data",
    description:
      "You can access and update your personal data collected and maintained by e-learning: **Update or correct your data:** Log into your account and update your data directly. **Delete your data:** To terminate your account, follow the detailed steps on your profile settings page (for students) or here (for instructors). For issues, contact our Support Team. Even after termination, some data may remain visible (e.g., copied, shared, or posted to third-party platforms). We retain data as long as we have a legitimate purpose, including legal obligations, dispute resolution, and agreement enforcement. We may retain and disclose such data according to this Privacy Policy after termination. **Access your data:** Use our online form or email privacy@e-learning.com or write to us at e-learning, Attn: Privacy/Legal Team, 600 Harrison Street, 3rd floor, San Francisco CA 94107. Allow up to one month for a response. For protection, requests may require sending from your associated email address and identity verification. We retain certain data when there is a lawful basis, including for mandatory record-keeping and transaction completion.",
  },
  {
    title: "Our Policy Concerning Children",
    description:
      "We recognize children's privacy interests and encourage parents and guardians to be active in their children’s online activities. Individuals under 18, but of consent age for online services in their location (e.g., 13 in the US or 16 in Ireland), cannot set up an account but can have a parent or guardian open one for them to access appropriate content. Individuals below the age of consent for online services may not use the Services. If we learn we've collected personal data from a child under those ages, we will take reasonable steps to delete it. Parents who believe e-learning has collected personal data from a child under those ages can request removal by emailing privacy@e-learning.com.",
  },
  {
    title: "Jurisdiction-Specific Rules",
    description:
      "If you live in California, you have rights regarding accessing, deleting, and sharing your data. If you live in Australia, you can file a formal complaint with the appropriate government agency. Users outside the United States should note that we transfer data to the US and other areas outside the European Economic Area.",
  },
  {
    title: "Users in California",
    description:
      "California residents have rights under the California Consumer Privacy Act ('CCPA'), including: **'Right to Know'**: Request categories and specific pieces of personal information collected about you and access a copy. **'Right to Correction'**: Correct inaccurate personal information. **'Right to Deletion'**: Request deletion of collected personal information. **'Right to Non-Discrimination'**: No penalty for exercising CCPA rights. **'Right to Opt-Out'**: Opt out of the sale or sharing of your personal information. While e-learning doesn't 'sell' in the traditional sense, we use cookies that make non-personally identifiable information available to third-parties for cross-context advertising. To opt out, click 'Do Not Sell or Share My Personal Information' at the bottom of this page. To exercise these rights, email privacy@e-learning.com or write to e-learning, Attn: Privacy/Legal Team, 600 Harrison Street, 3rd floor, San Francisco CA 94107. CCPA allows authorized agents to make requests; we may require email from your account and identity verification. For more on data collection and purposes, see 'What Data We Get,' 'How We Get Data About You,' 'What We Use Your Data For,' and 'Who We Share Your Data With.' California residents can also request details about personal information shared with third parties for direct marketing by emailing privacy@e-learning.com with 'California Shine the Light,' your mailing address, state, and email. We currently do not recognize or respond to Do Not Track signals due to a lack of a widely accepted standard.",
  },
  {
    title: "Users in Nevada",
    description:
      "e-learning does not sell its users’ personal information or data. Nevada residents can request that we do not sell their covered personal information by emailing privacy@e-learning.com or writing to e-learning, Attn: Privacy/Legal Team, 600 Harrison Street, 3rd floor, San Francisco CA 94107.",
  },
  {
    title: "Users in Australia",
    description:
      "Australian residents with a complaint can refer it to the Office of the Australian Information Commissioner ('OAIC') by visiting www.oaic.gov.au, emailing enquiries@oaic.gov.au, telephoning 1300 363 992, or writing to OAIC at GPO Box 5218, Sydney NSW 2001. You can contact our privacy team at privacy@e-learning.com to make a complaint about a breach of the Australian Privacy Principles, and we will respond within 30 days.",
  },
  {
    title:
      "Users in the European Economic Area (“EEA”) and United Kingdom (“UK”)",
    description:
      "If you are in the EEA or UK, you can request access to your data in a portable format and request rectification, erasure, restriction of processing, or objection to processing your personal data using the information in Section 6.2. If you are in the EEA, UK, or Switzerland, you also have the right to lodge a complaint with your supervisory authority. Personal data is processed outside the UK, Switzerland, and the EEA by our e-learning group companies or service providers for transactions, payments, and support. We use Controller-to-Processor Standard Contractual Clauses for transfers from the EEA to third countries and have data processing agreements with service providers and e-learning group companies to regulate data processing. By submitting data or using our Services, you consent to this transfer, storage, and processing.",
  },
  {
    title: "Data Privacy Framework (for EU/EEA, UK, and Swiss data subjects)",
    description:
      "e-learning, Inc. complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set forth by the U.S. Department of Commerce. e-learning, Inc. has certified adherence to these DPF Principles for processing personal data received from the European Union, UK (and Gibraltar), and Switzerland. In case of conflict between this Privacy Policy and DPF Principles, the Principles govern. More information on the DPF program and our certification is at https://www.dataprivacyframework.gov/. The Federal Trade Commission has jurisdiction over e-learning Inc.'s compliance. We are committed to subjecting all personal data from the EU, UK, Gibraltar, and Switzerland to the DPF Principles. Data types collected are in Section 1, purposes in Section 3, and third-party disclosures in Section 4. We remain responsible for personal data shared under the Onward Transfer Principle. We may disclose data in response to lawful public authority requests. e-learning, Inc. is liable for agent processing inconsistent with DPF Principles unless proven not responsible. Individuals have the right to access (Section 6.2) and limit use and disclosure (Section 6.1) of their personal data. For DPF Principles-related complaints, first contact e-learning at privacy@e-learning.com. Unresolved complaints will be referred to the International Centre for Dispute Resolution/American Arbitration Association (ICDR-AAA), a free alternative dispute resolution provider based in the U.S. Binding arbitration may be invoked under certain conditions as detailed at https://www.dataprivacyframework.gov/s/article/ANNEX-I-introduction-dpf?tabset-35584=2.",
  },
  {
    title: "Users Outside of the U.S.",
    description:
      "To provide the Services, we must transfer and process your data in the United States. If you are using the Services from outside the United States, you consent to the transfer, storage, and processing of your data in and to the United States or other countries.",
  },
  {
    title: "Updates & Contact Info",
    description:
      "When we make a material change to this policy, we’ll notify users via email, in-product notice, or another legally required mechanism. Changes become effective on the day they’re posted. Please contact us via email or postal mail with any questions, concerns, or disputes.",
  },
  {
    title: "Modif",
    description:
      "This entry appears to be incomplete. It likely refers to 'Modifications' or 'Updates' to the policy.",
  },
];
