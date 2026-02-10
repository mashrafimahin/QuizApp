import { useEffect } from "react";
import styles from "../Style/Module/Terms.module.css";

const Terms = () => {
  const termsData = [
    {
      id: 1,
      title: "Introduction",
      content:
        "Welcome to QuizApp. These Terms of Service ('Terms') govern your use of our quiz application and services. By accessing or using QuizApp, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.",
      subsections: [],
    },
    {
      id: 2,
      title: "Description of Service",
      content:
        "QuizApp is an educational platform that provides interactive quizzes and learning materials. Our services include quiz creation, taking quizzes, tracking progress, and accessing educational content designed to enhance learning experiences.",
      subsections: [],
    },
    {
      id: 3,
      title: "User Accounts",
      content: "",
      subsections: [
        {
          subtitle: "Account Creation",
          content:
            "To access certain features of QuizApp, you must create an account. You agree to:",
          list: [
            "Provide accurate and complete information",
            "Maintain the confidentiality of your account credentials",
            "Be responsible for all activities under your account",
            "Notify us immediately of any unauthorized use",
          ],
        },
        {
          subtitle: "Account Termination",
          content:
            "We reserve the right to terminate or suspend your account at any time for violations of these Terms or for other reasons we deem necessary.",
        },
      ],
    },
    {
      id: 4,
      title: "User Conduct",
      content:
        "You agree not to use QuizApp for any unlawful or prohibited purposes, including but not limited to:",
      subsections: [],
      list: [
        "Violating any applicable laws or regulations",
        "Impersonating any person or entity",
        "Uploading harmful, offensive, or inappropriate content",
        "Attempting to gain unauthorized access to our systems",
        "Interfering with the proper functioning of the service",
        "Using the service for commercial purposes without permission",
      ],
    },
    {
      id: 5,
      title: "Content and Intellectual Property",
      content: "",
      subsections: [
        {
          subtitle: "User Content",
          content:
            "You retain ownership of content you create or upload to QuizApp. By uploading content, you grant us a license to use, display, and distribute your content in connection with providing our services.",
        },
        {
          subtitle: "Our Content",
          content:
            "All content provided by QuizApp, including quizzes, text, graphics, logos, and software, is protected by intellectual property laws and remains our property or our licensors.",
        },
      ],
    },
    {
      id: 6,
      title: "Privacy",
      content:
        "Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      subsections: [],
    },
    {
      id: 7,
      title: "Termination",
      content:
        "We may terminate or suspend your access to QuizApp immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.",
      subsections: [],
    },
    {
      id: 8,
      title: "Disclaimer of Warranties",
      content:
        "QuizApp is provided 'as is' without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or secure.",
      subsections: [],
    },
    {
      id: 9,
      title: "Limitation of Liability",
      content:
        "In no event shall QuizApp or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.",
      subsections: [],
    },
    {
      id: 10,
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.",
      subsections: [],
    },
    {
      id: 11,
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these Terms at any time. We will notify users of significant changes. Continued use of QuizApp after changes constitutes acceptance of the new Terms.",
      subsections: [],
    },
    {
      id: 12,
      title: "Contact Us",
      content:
        "If you have any questions about these Terms of Service, please contact us at:",
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
    <div className={styles.terms}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: November 13, 2025</p>

        {termsData.map((section, index) => (
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

export default Terms;
