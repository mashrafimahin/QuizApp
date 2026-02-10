import { useEffect, useState } from "react";
import styles from "../Style/Module/Support.module.css";

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // question and answers
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button in the navigation bar and fill in your details including name, email, and password. You'll receive a confirmation email to verify your account.",
    },
    {
      question: "How do I take a quiz?",
      answer:
        "Navigate to the Courses page, select a course, and click on 'Start Quiz'. Make sure you're logged in to save your progress and results.",
    },
    {
      question: "Can I retake a quiz?",
      answer:
        "Yes, you can retake any quiz as many times as you want. Your best score will be saved in your dashboard.",
    },
    {
      question: "How do I view my certificates?",
      answer:
        "After completing a course with a passing score, your certificate will be available in your Dashboard under the 'Certificates' section.",
    },
    {
      question: "I'm having trouble logging in. What should I do?",
      answer:
        "Check your email and password. If you've forgotten your password, use the 'Forgot Password' link on the login page. If issues persist, contact our support team.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "Go to your Dashboard and click on 'Profile Settings'. You can update your name, email, and other personal information there.",
    },
    {
      question: "Are the courses free?",
      answer:
        "We offer both free and premium courses. Free courses are available to all users, while premium courses require a subscription.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us through the contact form below, or email us at support@quizapp.com. We typically respond within 24 hours.",
    },
  ];

  // handle click
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // window on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.support}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Help Center</h1>
          <p>Find answers to common questions and get the help you need</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span
                    className={`${styles.faqIcon} ${
                      activeFaq === index ? styles.active : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswer} ${
                    activeFaq === index ? styles.active : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2>Still Need Help?</h2>
          <p>
            Can't find what you're looking for? Our support team is here to
            help.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h3>Email Support</h3>
              <p>Get help from our support team</p>
              <a
                href="mailto:mashrafi.devs@gmail.com"
                className={styles.contactLink}
              >
                support@quizapp.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3>Phone Support</h3>
              <p>Speak directly with our experts</p>
              <a href="tel:+1-800-QUIZAPP" className={styles.contactLink}>
                +1 (800) QUIZ-APP
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>💬</div>
              <h3>Live Chat</h3>
              <p>Chat with us instantly</p>
              <button className={styles.chatButton}>Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className={styles.quickHelp}>
        <div className={styles.container}>
          <h2>Quick Help Topics</h2>
          <div className={styles.helpGrid}>
            <div className={styles.helpCard}>
              <h3>Getting Started</h3>
              <ul>
                <li>
                  <a>Creating an account</a>
                </li>
                <li>
                  <a>Logging in</a>
                </li>
                <li>
                  <a>Using the dashboard</a>
                </li>
              </ul>
            </div>

            <div className={styles.helpCard}>
              <h3>Courses & Quizzes</h3>
              <ul>
                <li>
                  <a>Browsing courses</a>
                </li>
                <li>
                  <a>Taking quizzes</a>
                </li>
                <li>
                  <a>Tracking progress</a>
                </li>
              </ul>
            </div>

            <div className={styles.helpCard}>
              <h3>Account & Billing</h3>
              <ul>
                <li>
                  <a>Managing profile</a>
                </li>
                <li>
                  <a>Subscriptions</a>
                </li>
                <li>
                  <a>Certificates</a>
                </li>
              </ul>
            </div>

            <div className={styles.helpCard}>
              <h3>Technical Issues</h3>
              <ul>
                <li>
                  <a>Common problems</a>
                </li>
                <li>
                  <a>Browser compatibility</a>
                </li>
                <li>
                  <a>Mobile app</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
