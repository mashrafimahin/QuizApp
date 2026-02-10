import { useEffect } from "react";
import styles from "../Style/Module/Policy.module.css";

const Policy = () => {
  const privacyData = [
    {
      id: 1,
      title: "Introduction",
      content:
        "Welcome to QuizApp. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our quiz application.",
      subsections: [],
    },
    {
      id: 2,
      title: "Information We Collect",
      content: "",
      subsections: [
        {
          subtitle: "Personal Information",
          content:
            "We may collect personal information that you provide directly to us, including:",
          list: [
            "Name and email address when you create an account",
            "Profile information and preferences",
            "Quiz responses and performance data",
            "Communication preferences",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          content:
            "We automatically collect certain information when you use our application:",
          list: [
            "Device information (IP address, browser type, operating system)",
            "Usage data (pages visited, time spent, quiz completion rates)",
            "Cookies and similar tracking technologies",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: "We use the collected information for the following purposes:",
      subsections: [],
      list: [
        "Provide and maintain our quiz services",
        "Personalize your learning experience",
        "Track your progress and provide feedback",
        "Improve our application and develop new features",
        "Send you important updates and notifications",
        "Ensure security and prevent fraud",
      ],
    },
    {
      id: 4,
      title: "Information Sharing and Disclosure",
      content:
        "We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:",
      subsections: [],
      list: [
        "With your explicit consent",
        "To comply with legal obligations",
        "To protect our rights and prevent fraud",
        "In connection with a business transfer or merger",
      ],
    },
    {
      id: 5,
      title: "Cookies and Tracking Technologies",
      content:
        "We use cookies and similar technologies to enhance your experience:",
      subsections: [],
      list: [
        "Essential cookies for basic functionality",
        "Analytics cookies to understand usage patterns",
        "Preference cookies to remember your settings",
      ],
      additionalContent:
        "You can control cookie preferences through your browser settings.",
    },
    {
      id: 6,
      title: "Data Security",
      content:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
      subsections: [],
    },
    {
      id: 7,
      title: "Your Rights",
      content:
        "Depending on your location, you may have the following rights regarding your personal information:",
      subsections: [],
      list: [
        "Access to your personal data",
        "Correction of inaccurate information",
        "Deletion of your data",
        "Data portability",
        "Opt-out of marketing communications",
      ],
    },
    {
      id: 8,
      title: "Children's Privacy",
      content:
        "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.",
      subsections: [],
    },
    {
      id: 9,
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date.",
      subsections: [],
    },
    {
      id: 10,
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at:",
      subsections: [],
      contactInfo: {
        email: "mashrafi.devs@gmail.com",
        address: "Kushtia, Bangladesh",
      },
    },
  ];

  // window mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.policy}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: November 13, 2025</p>

        {privacyData.map((section, index) => (
          <section
            key={section.id}
            className={`${styles.section} ${
              index % 2 === 0 ? styles.sectionLight : styles.sectionWhite
            }`}
          >
            <h2 className={styles.sectionTitle}>
              {section.id}. {section.title}
            </h2>

            {section.content && (
              <p className={styles.text}>{section.content}</p>
            )}

            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h3 className={styles.subTitle}>{subsection.subtitle}</h3>
                <p className={styles.text}>{subsection.content}</p>
                {subsection.list && (
                  <ul className={styles.list}>
                    {subsection.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}

            {section.additionalContent && (
              <p className={styles.text}>{section.additionalContent}</p>
            )}

            {section.contactInfo && (
              <div className={styles.contactInfo}>
                <p>Email: {section.contactInfo.email}</p>
                <p>Address: {section.contactInfo.address}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Policy;
