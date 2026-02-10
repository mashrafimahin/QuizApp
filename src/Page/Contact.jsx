// hooks
import { useEffect, useState } from "react";

// styles
import styles from "../Style/Module/Contact.module.css";

// main
const Contact = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // state to store submitted contacts
  const [contacts, setContacts] = useState([]);

  // handle change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setContacts((prev) => [...prev, { ...formData, id: Date.now() }]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Message sent successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  // window mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        {/* form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Your full name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Your phone number (optional)"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Tell us how we can help you..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {/* overview of submitted contacts */}
        {contacts.length > 0 && (
          <div className={styles.contactsList}>
            <h2 className={styles.listHeading}>Recent Messages</h2>
            {contacts.map((contact) => (
              <div key={contact.id} className={styles.contactItem}>
                <h3>{contact.name}</h3>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                {contact.phone && (
                  <p>
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                )}
                <p>
                  <strong>Message:</strong> {contact.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
