import line from "../assets/line.svg";
import { motion } from "framer-motion";
const TermsOfuse = () => {
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
          Terms Of Use
        </motion.h1>
        <motion.img
        initial={{
                y : 20,
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
        className="w-full" src={line} alt="" />
      </div>
      <motion.p
      initial={{
                y : 20,
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
        Our mission is to empower growth through accessible, high-quality
        education. We provide a platform where educators can create and share
        impactful learning experiences, and where learners from all over the
        world can access these courses to develop new skills, explore interests,
        and reach their goals. Our marketplace approach ensures a diverse range
        of content, tailored to meet the needs of a global community of learners
        and instructors. To maintain a trusted and productive environment, we’ve
        established some important guidelines. These Terms apply to your use of
        our website, mobile apps, APIs, and all other services we offer
        (“Services”).
      </motion.p>
      <div className="my-10">
        {terms.map((item, index) => (
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
              {index + 1}.{item.value.title}
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
              {item.value.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfuse;

const terms = [
  {
    key: "accounts",
    value: {
      title: "Accounts",
      description:
        "You need an account for most activities on our platform. Keep your password somewhere safe, because you’re responsible for all activity associated with your account. If you suspect someone else is using your account, let us know by contacting our Support Team. You must have reached the age of consent for online services in your country to use e-learning. You need an account for most activities on our platform, including to purchase and access content or to submit content for publication. When setting up and maintaining your account, you must provide and continue to provide accurate and complete information, including a valid email address. You have complete responsibility for your account and everything that happens on your account, including for any harm or damage (to us or anyone else) caused by someone using your account without your permission. This means you need to be careful with your password. You may not transfer your account to someone else or use someone else’s account. If you contact us to request access to an account, we will not grant you such access unless you can provide us with the information that we need to prove you are the owner of that account. In the event of the death of a user, the account of that user will be closed. You may not share your account login credentials with anyone else. You are responsible for what happens with your account and e-learning will not intervene in disputes between students or instructors who have shared account login credentials. You must notify us immediately upon learning that someone else may be using your account without your permission (or if you suspect any other security incident) by contacting our Support Team. We may request some information from you to confirm that you are indeed the owner of your account. Students and instructors must be at least 18 years of age to create an account on e-learning and use the Services. If you are younger than 18 but above the required age for consent to use online services where you live (for example, 13 in the US or 16 in Ireland), you may not set up an account, but we encourage you to invite a parent or guardian to open an account and help you access content that is appropriate for you. If you are below this age of consent to use online services, you may not create an e-learning account or use the Services, regardless of parental or guardian assistance or consent. If we discover that you have created an account that violates these rules, we will terminate your account. Under our Instructor Terms, you may be requested to verify your identity before you are authorized to submit content for publication on e-learning. You can terminate your account at any time by following the steps here. Check our Privacy Policy to see what happens when you terminate your account.",
    },
  },
  {
    key: "content_enrollment_and_lifetime_access",
    value: {
      title: "Content Enrollment and Lifetime Access",
      description:
        "When you enroll in a course or other content, you get a license from us to view it via the e-learning Services and no other use. Don’t try to transfer or resell content in any way. We generally grant you a lifetime access license, except when we must disable the content because of legal or policy reasons or for enrollments via Subscription Plans. Under our Instructor Terms, when instructors publish content on e-learning, they grant e-learning a license to offer a license to the content to students. This means that we have the right to sublicense the content to enrolled students. As a student, when you enroll in a course or other content, whether it’s free or paid content, you are getting a license from e-learning to view the content via the e-learning platform and Services, and e-learning is the licensor of record. Content is licensed, and not sold, to you. This license does not give you any right to resell the content in any manner (including by sharing account information with a purchaser or illegally downloading the content and sharing it on torrent sites). In legal, more complete terms, e-learning grants you (as a student) a limited, non-exclusive, non-transferable license to access and view the content for which you have paid all required fees, solely for your personal, non-commercial, educational purposes through the Services, in accordance with these Terms and any conditions or restrictions associated with the particular content or feature of our Services. All other uses are expressly prohibited. You may not reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, sublicense, or otherwise transfer or use any content unless we give you explicit permission to do so in a written agreement signed by an e-learning authorized representative. This also applies to content you can access via any of our APIs. We generally give a lifetime access license to our students when they enroll in a course or other content. However, we reserve the right to revoke any license to access and use any content at any point in time in the event where we decide or are obligated to disable access to the content due to legal or policy reasons, for example, if the course or other content you enrolled in is the object of a copyright complaint, or if we determine it violates our Trust & Safety Guidelines. This lifetime access license does not apply to enrollments via Subscription Plans or to add-on features and services associated with the course or other content you enroll in. For example, instructors may decide at any time to no longer provide teaching assistance or Q&A services in association with the content. To be clear, the lifetime access is to the course content but not to the instructor. Instructors may not grant licenses to their content to students directly, and any such direct license shall be null and void and a violation of these Terms.",
    },
  },
  {
    key: "payments_credits_and_refunds",
    value: {
      title: "Payments, Credits, and Refunds",
      description:
        "When you make a payment, you agree to use a valid payment method. If you aren’t happy with your content, e-learning offers a 30-day refund or credit for most content purchases.",
    },
  },
  {
    key: "pricing",
    value: {
      title: "Pricing",
      description:
        "The prices of content on e-learning are determined based on the terms of the Instructor Terms and our Promotions Policy. In some instances, the price of content offered on the e-learning website may not be exactly the same as the price offered on our mobile or TV applications, due to mobile platform providers’ pricing systems and their policies around implementing sales and promotions. We occasionally run promotions and sales for our content, during which certain content is available at discounted prices for a set period of time. The price applicable to the content will be the price at the time you complete your purchase of the content (at checkout). Any price offered for particular content may also be different when you are logged into your account from the price available to users who aren’t registered or logged in, because some of our promotions are available only to new users. If you are logged into your account, the listed currency you see is based on your location when you created your account. If you are not logged into your account, the price currency is based on the country where you are located. We do not enable users to see pricing in other currencies. If you are a student located in a country where use and sales tax, goods and services tax, or value added tax is applicable to consumer sales, we are responsible for collecting and remitting that tax to the proper tax authorities. Depending on your location, the price you see may include such taxes, or tax may be added at checkout.",
    },
  },
  {
    key: "payments",
    value: {
      title: "Payments",
      description:
        "You agree to pay the fees for content that you purchase, and you authorize us to charge your debit or credit card or process other means of payment (such as Boleto, SEPA, direct debit, or mobile wallet) for those fees. e-learning works with payment service providers to offer you the most convenient payment methods in your country and to keep your payment information secure. We may update your payment methods using information provided by our payment service providers. Check out our Privacy Policy for more details. When you make a purchase, you agree not to use an invalid or unauthorized payment method. If your payment method fails and you still get access to the content you are enrolling in, you agree to pay us the corresponding fees within 30 days of notification from us. We reserve the right to disable access to any content for which we have not received adequate payment.",
    },
  },
  {
    key: "refunds_and_refund_credits",
    value: {
      title: "Refunds and Refund Credits",
      description:
        "If the content you purchased is not what you were expecting, you can request, within 30 days of your purchase of the content, that e-learning apply a refund to your account. This refund option does not apply to Subscription Plan purchases, which are covered in Section 8.4 (Payments and Billing) below. We reserve the right to apply your refund as a refund credit or a refund to your original payment method, at our discretion, depending on capabilities of our payment service providers, the platform from which you purchased your content (website, mobile or TV app), and other factors. No refund is due to you if you request it after the 30-day guarantee time limit has passed. However, if the content you previously purchased is disabled for certain legal or policy reasons, you are entitled to a refund beyond this 30-day limit. e-learning also reserves the right to refund students beyond the 30-day limit in cases of suspected or confirmed account fraud. To request a refund, follow the steps here. As detailed in the Instructor Terms, instructors agree that students have the right to receive these refunds. If you are issued refund credits to your account, the refund credits will be automatically applied towards your next content purchase on our website, but can’t be used for purchases in our mobile or TV applications. Refund credits may expire if not used within the specified period, are non-refundable, and have no cash value, in each case unless otherwise required by applicable law. At our discretion, if we believe you are abusing our refund policy, such as if you’ve consumed a notable amount of the content that you want to refund or if you’ve previously refunded the content, we reserve the right to deny your refund, restrict you from other future refunds, ban your account, and/or restrict all future use of the Services. If we ban your account or disable your access to the content due to your violation of these Terms or our Trust & Safety Guidelines, you will not be eligible to receive a refund. Additional information on our refund policy is available here. Refund credits, and any gift or promotional credits (as described in “Gift and Promotional Codes and Credits” below) with stored value, are issued by and solely an obligation of e-learning LEARN Services, LLC (“e-learning LEARN”), an affiliate of e-learning. In addition to the “Limitation of Liability” section below, you agree to release e-learning and its subsidiaries and affiliates (other than e-learning LEARN) from any and all liability or claims arising in connection with such credits.",
    },
  },
  {
    key: "gift_and_promotional_codes_and_credits",
    value: {
      title: "Gift and Promotional Codes and Credits",
      description:
        "e-learning or our partners may offer gift and promotional codes to students. Certain codes may be redeemed for gift or promotional credits applied to your e-learning account, which then may be used to purchase eligible content on our platform, subject to the terms included with your codes. Other codes may be directly redeemable for specific content. Gift and promotional credits can’t be used for purchases in our mobile or TV applications. These codes and credits, as well as any promotional value linked to them, may expire if not used within the period specified in your e-learning account. Gift and promotional codes offered by e-learning may not be refunded for cash, unless otherwise specified in the terms included with your codes or as required by applicable law. Gift and promotional codes offered by a partner are subject to that partner’s refund policies. If you have multiple saved credit amounts, e-learning may determine which of your credits to apply to your purchase. Check out our Support Page and any terms included with your codes for more details.",
    },
  },
  {
    key: "content_and_behavior_rules",
    value: {
      title: "Content and Behavior Rules",
      description:
        "You can only use e-learning for lawful purposes. You’re responsible for all the content that you post on our platform. You should keep the reviews, questions, posts, courses and other content you upload in line with our Trust & Safety Guidelines and the law, and respect the intellectual property rights of others. We can ban your account for repeated or major offenses. If you think someone is infringing your copyright on our platform, let us know. You may not access or use the Services or create an account for unlawful purposes. Your use of the Services and behavior on our platform must comply with applicable local or national laws or regulations of your country. You are solely responsible for the knowledge of and compliance with such laws and regulations that are applicable to you. If you are a student, the Services enable you to ask questions to the instructors of courses or other content you are enrolled in, and to post reviews of content. For certain content, the instructor may invite you to submit content as “homework” or tests. Don’t post or submit anything that is not yours. If you are an instructor, you can submit content for publication on the platform and you can also communicate with the students who have enrolled in your courses or other content. In both cases, you must abide by the law and respect the rights of others: you cannot post any course, question, answer, review or other content that violates applicable local or national laws or regulations of your country. You are solely responsible for any courses, content, and actions you post or take via the platform and Services and their consequences. Make sure you understand all the copyright restrictions set forth in the Instructor Terms before you submit any content for publication on e-learning. If we are put on notice that your course or content violates the law or the rights of others (for example, if it is established that it violates intellectual property or image rights of others, or is about an illegal activity), if we discover that your content or behavior violates our Trust & Safety Guidelines, or if we believe your content or behavior is unlawful, inappropriate, or objectionable (for example if you impersonate someone else), we may remove your content from our platform. e-learning complies with copyright laws. Check out our Intellectual Property Policy for more details. e-learning has discretion in enforcing these Terms and our Trust & Safety Guidelines. We may restrict or terminate your permission to use our platform and Services or ban your account at any time, with or without notice, for any or no reason, including for any violation of these Terms, if you fail to pay any fees when due, for fraudulent chargeback requests, upon the request of law enforcement or government agencies, for extended periods of inactivity, for unexpected technical issues or problems, if we suspect that you engage in fraudulent or illegal activities, or for any other reason in our sole discretion. Upon any such termination we may delete your account and content, and we may prevent you from further access to the platforms and use of our Services. Your content may still be available on the platforms even if your account is terminated or suspended. You agree that we will have no liability to you or any third party for termination of your account, removal of your content, or blocking of your access to our platforms and services. If a user has published content that infringes your copyright or trademark rights, please let us know. Our Instructor Terms require our instructors to follow the law and respect the intellectual property rights of others. For more details on how to file a copyright or trademark infringement claim with us, see our Intellectual Property Policy.",
    },
  },
  {
    key: "e_learning_rights_to_content_you_post",
    value: {
      title: "e-learning’s Rights to Content You Post",
      description:
        "You retain ownership of content you post to our platform, including your courses. We’re allowed to share your content to anyone through any media, including promoting it via advertising on other websites. The content you post as a student or instructor (including courses) remains yours. By posting courses and other content, you allow e-learning to reuse and share it but you do not lose any ownership rights you may have over your content. If you are an instructor, be sure to understand the content licensing terms that are detailed in the Instructor Terms. When you post content, comments, questions, reviews, and when you submit to us ideas and suggestions for new features or improvements, you authorize e-learning to use and share this content with anyone, distribute it and promote it on any platform and in any media, and to make modifications or edits to it as we see fit. In legal language, by submitting or posting content on or through the platforms, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute your content (including your name and image) in any and all media or distribution methods (existing now or later developed). This includes making your content available to other companies, organizations, or individuals who partner with e-learning for the syndication, broadcast, distribution, or publication of content on other media, as well as using your content for marketing purposes. You also waive any rights of privacy, publicity, or other rights of a similar nature applicable to all these uses, to the extent permissible under applicable law. You represent and warrant that you have all the rights, power, and authority necessary to authorize us to use any content that you submit. You also agree to all such uses of your content with no compensation paid to you.",
    },
  },
  {
    key: "using_e_learning_at_your_own_risk",
    value: {
      title: "Using e-learning at Your Own Risk",
      description:
        "Anyone can use e-learning to create and publish content and instructors and we enable instructors and students to interact for teaching and learning. Like other platforms where people can post content and interact, some things can go wrong, and you use e-learning at your own risk. Our platform model means we do not review or edit the content for legal issues, and we are not in a position to determine the legality of content. We do not exercise any editorial control over the content that is available on the platform and, as such, do not guarantee in any manner the reliability, validity, accuracy, or truthfulness of the content. If you access content, you rely on any information provided by an instructor at your own risk. By using the Services, you may be exposed to content that you consider offensive, indecent, or objectionable. e-learning has no responsibility to keep such content from you and no liability for your access or enrollment in any course or other content, to the extent permissible under applicable law. This also applies to any content relating to health, wellness, and physical exercise. You acknowledge the inherent risks and dangers in the strenuous nature of these types of content, and by accessing such content you choose to assume those risks voluntarily, including risk of illness, bodily injury, disability, or death. You assume full responsibility for the choices you make before, during, and after your access to the content. When you interact directly with a student or an instructor, you must be careful about the types of personal information that you share. While we restrict the types of information instructors may request from students, we do not control what students and instructors do with the information they obtain from other users on the platform. You should not share your email or other personal information about you for your safety. We do not hire or employ instructors nor are we responsible or liable for any interactions involved between instructors and students. We are not liable for disputes, claims, losses, injuries, or damage of any kind that might arise out of or relate to the conduct of instructors or students. When you use our Services, you will find links to other websites that we don’t own or control. We are not responsible for the content or any other aspect of these third-party sites, including their collection of information about you. You should also read their terms and conditions and privacy policies.",
    },
  },
  {
    key: "e_learning_rights",
    value: {
      title: "e-learning’s Rights",
      description:
        "We own the e-learning platform and Services, including the website, present or future apps and services, and things like our logos, API, code, and content created by our employees. You can’t tamper with those or use them without authorization. All right, title, and interest in and to the e-learning platform and Services, including our website, our existing or future applications, our APIs, databases, and the content our employees or partners submit or provide through our Services (but excluding content provided by instructors and students) are and will remain the exclusive property of e-learning and its licensors. Our platforms and services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Nothing gives you a right to use the e-learning name or any of the e-learning trademarks, logos, domain names, and other distinctive brand features. Any feedback, comments, or suggestions you may provide regarding e-learning or the Services is entirely voluntary and we will be free to use such feedback, comments, or suggestions as we see fit and without any obligation to you. You may not do any of the following while accessing or using the e-learning platform and Services: access, tamper with, or use non-public areas of the platform (including content storage), e-learning’s computer systems, or the technical delivery systems of e-learning’s service providers. disable, interfere with, or try to circumvent any of the features of the platforms related to security or probe, scan, or test the vulnerability of any of our systems. copy, modify, create a derivative work of, reverse engineer, reverse assemble, or otherwise attempt to discover any source code of or content on the e-learning platform or Services. access or search or attempt to access or search our platform by any means (automated or otherwise) other than through our currently available search functionalities that are provided via our website, mobile apps, or API (and only pursuant to those API terms and conditions). You may not scrape, spider, use a robot, or use other automated means of any kind to access the Services. in any way use the Services to send altered, deceptive, or false source-identifying information (such as sending email communications falsely appearing as e-learning); or interfere with, or disrupt, (or attempt to do so), the access of any user, host, or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the platforms or services, or in any other manner interfering with or creating an undue burden on the Services.",
    },
  },
  {
    key: "subscription_terms",
    value: {
      title: "Subscription Terms",
      description:
        "This section covers additional terms that apply to your use of our subscription-based collections as a student (“Subscription Plans”). By using a Subscription Plan, you agree to the additional terms in this section. Note that use of e-learning Business is not subject to these Terms, but is instead governed by the agreement between e-learning and the subscribing organization.",
    },
  },
  {
    key: "subscription_plans",
    value: {
      title: "Subscription Plans",
      description:
        "During your subscription to a Subscription Plan, you get a limited, non-exclusive, non-transferable license from us to access and view the content included in that Subscription Plan via the Services. With the exception of the lifetime access license grant, the terms included in the “Content Enrollment and Lifetime Access” section above apply to enrollments via Subscription Plans. Your Subscription Plan may include access to interactive environments, such as workspaces (“Interactive Sessions”). Interactive Sessions may be provided by a third party, subject to its own agreement or terms and conditions, and subject to usage limitations outlined on our Support Page. You’re responsible for complying with the terms and conditions of any third party provider. Your Subscription Plan may also include access to our GenAI Features (defined below). Your use of these features is subject to the terms included in the “Generative AI Terms” section below. The subscription that you purchase or renew determines the scope, features, and price of your access to a Subscription Plan. You may not transfer, assign, or share your subscription with anyone else. We reserve the right to revoke any license to use the content in our Subscription Plans for legal or policy reasons at any time and at our sole discretion, such as if we no longer have the right to offer the content through a Subscription Plan. Additional information on our right to revoke is included in the “Content Enrollment and Lifetime Access” section.",
    },
  },
  {
    key: "account_management",
    value: {
      title: "Account Management",
      description:
        "You may cancel your subscription by following the steps outlined on our Support Page. If you cancel your subscription to a Subscription Plan, your access to that Subscription Plan will automatically end on the last day of your billing period. On cancellation, you will not be entitled to receive a refund or credit of any fees already paid for your subscription, unless otherwise required by applicable law. For clarity, cancellation of a subscription does not terminate your e-learning account.",
    },
  },
  {
    key: "free_trials_and_renewals",
    value: {
      title: "Free Trials & Renewals",
      description:
        "Your subscription may start with a free trial. The duration of the free trial period of your subscription will be specified during sign-up. e-learning determines free trial eligibility at our sole discretion and may limit access, eligibility, or duration. We reserve the right to terminate the free trial and suspend your subscription if we determine that you aren’t eligible. We will charge the subscription fee for your next billing cycle at the end of the free trial period. Your subscription will automatically renew according to your subscription settings (e.g., monthly or annually) unless you cancel your subscription prior to the end of the free trial period. For more information on how to view applicable fees and dates of your free trial period, visit our Support Page.",
    },
  },
  {
    key: "payments_and_billing",
    value: {
      title: "Payments and Billing",
      description:
        "The subscription fee will be listed at the time of your purchase. You can visit our Support Page to learn more about where to find the fees and dates applicable to your subscription. We may also be required to add taxes to your subscription fee as described in the “Payments, Credits, and Refunds” section above. Payments are non-refundable and there are no refunds or credits for partially used periods, unless otherwise required by applicable law. Depending on where you are located, you may qualify for a refund. See our Refund Policy for Subscription Plans for additional information. To subscribe to a Subscription Plan, you must provide a payment method. By subscribing to a Subscription Plan and providing your billing information during checkout, you grant us and our payment service providers the right to process payment for the then-applicable fees via the payment method we have on record for you. At the end of each subscription term, we will automatically renew your subscription for the same length of term and process your payment method for payment of the then-applicable fees. In the event that we update your payment method using information provided by our payment service providers (as described in the “Payments, Credits, and Refunds” section above), you authorize us to continue to charge the then-applicable fees to your updated payment method. If we are unable to process payment through the payment method we have on file for you, or if you file a chargeback disputing charges made to your payment method and the chargeback is granted, we may suspend or terminate your subscription. We reserve the right to change our Subscription Plans or adjust pricing for our Services at our sole discretion. Any price changes or changes to your subscription will take effect following notice to you, except as otherwise required by applicable law.",
    },
  },
  {
    key: "interactive_session_restrictions",
    value: {
      title: "Interactive Session Restrictions",
      description:
        "You may not do any of the following while accessing or using the Interactive Sessions: use the Interactive Sessions for any purpose other than to perform the activities as instructed by e-learning’s labs; provide web, database, or forum access, or engage in cryptocurrency mining, on or through the Interactive Sessions; exceed the usage limitations outlined on our Support Page; access or use the Interactive Sessions in any commercial production environment; take any action in the Interactive Sessions that results in a disruption or interference of our Services or the stability of our infrastructure; or use any data or information other than simulated, anonymous, non-personal, non-live data or information when accessing or using the Interactive Sessions. These restrictions are in addition to those listed elsewhere in these Terms, including in the “Content and Behavior Rules” and “e-learning’s Rights” sections above.",
    },
  },
  {
    key: "subscription_disclaimers",
    value: {
      title: "Subscription Disclaimers",
      description:
        "We make no guarantees as to the availability of any specific content in any Subscription Plan or as to any minimum amount of content in any Subscription Plan. At any point in the future, we reserve the right to offer or cease to offer additional features to any Subscription Plan, or to otherwise modify or terminate a Subscription Plan at our sole discretion. We have no responsibility to preserve or store the content inputted by you in connection with your use of any Subscription Plan. These disclaimers are in addition to those listed in the “Disclaimers” section below.",
    },
  },
  {
    key: "generative_ai_terms",
    value: {
      title: "Generative AI Terms",
      description:
        "This section covers additional terms that apply to your use of generative AI features in our Services (“GenAI Features”). By accessing or using any GenAI Feature, you agree to the additional terms in this section.",
    },
  },
  {
    key: "inputs_and_outputs",
    value: {
      title: "Inputs and Outputs",
      description:
        "When using the GenAI Features, you may input or upload content (“Input”). The Services will process the Input to generate output, such as text, provided within the Services (“Output”). You retain ownership of the Input and grant e-learning the rights detailed in the “e-learning’s Rights to Content You Post” section above, allowing us to use the Input in the same manner as the other content you submit or post on or through our platform. e-learning grants you a limited, non-transferable, non-sublicensable license to access and use the GenAI Features and Output in accordance with these Terms and solely for your personal, non-commercial, educational purposes through the Services.",
    },
  },
  {
    key: "no_model_training_or_fine_tuning",
    value: {
      title: "No Model Training or Fine-tuning",
      description:
        "e-learning does not use your personal data to train or fine tune generative AI models used for the GenAI Features. If this changes in the future, e-learning will only use your personal data to train or fine tune generative AI models where we have an appropriate legal basis for doing so. In some cases, we may rely on your consent and provide you with the ability to withdraw that consent. In other cases, we may rely on other legal bases, such as legitimate interest or contractual necessity, and provide you with the ability to opt out.",
    },
  },
  {
    key: "genai_feature_restrictions",
    value: {
      title: "GenAI Feature Restrictions",
      description:
        "You may not do any of the following while accessing or using the GenAI Features: use the GenAI Tools or Output in a manner that violates or could reasonably lead to the violation of the Terms or any applicable laws or regulations, including the infringement, misappropriation, or violation of the rights of others; represent that the Output was human-generated when it was not; submit any Input that contains personal or sensitive information; deceive, mislead, harass, or harm others in any way; automatically or programmatically extract data or Output; use the GenAI Features or Output to develop models or for machine learning or model training purposes that compete with e-learning; circumvent any restrictions or protective measures of the Ge",
    },
  },
];
