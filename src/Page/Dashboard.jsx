// hooks
import { useState } from "react";

// styles
import styles from "../Style/Module/Dashboard.module.css";

const Dashboard = () => {
  // states
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileText, setProfileText] = useState("");

  // handle input change
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // handle save
  const handleSave = () => {
    setIsEditing(false);
    // For public access, we could save to localStorage or a guest account
    localStorage.setItem("guestUserData", JSON.stringify(userData));
    setProfileText(
      `${userData.firstName.split("")[0]}${userData.lastName.split("")[0]}`,
    );
  };

  // handle cancel
  const handleCancel = () => {
    // Load saved data or reset to defaults
    const savedData = JSON.parse(localStorage.getItem("guestUserData") || "{}");
    setUserData(
      savedData || {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
      },
    );
    setIsEditing(false);
  };

  // handle change password (placeholder)
  const handleChangePassword = () => {
    alert("Change password functionality will be implemented soon!");
  };

  // Initialize profile text from saved data
  if (userData.firstName && userData.lastName && !profileText) {
    setProfileText(
      `${userData.firstName.split("")[0]}${userData.lastName.split("")[0]}`,
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              {/* Placeholder for profile image */}
              <div className={styles.imagePlaceholder}>
                {profileText || "G"}
              </div>
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>
                {userData.firstName || "Guest"} {userData.lastName || "User"}
              </h1>
              <p className={styles.email}>
                {userData.email || "guest@example.com"}
              </p>
            </div>
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.detailRow}>
              <label className={styles.label}>First Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                />
              ) : (
                <span className={styles.value}>
                  {userData.firstName || "Guest"}
                </span>
              )}
            </div>

            <div className={styles.detailRow}>
              <label className={styles.label}>Last Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                />
              ) : (
                <span className={styles.value}>
                  {userData.lastName || "User"}
                </span>
              )}
            </div>

            <div className={styles.detailRow}>
              <label className={styles.label}>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              ) : (
                <span className={styles.value}>
                  {userData.email || "guest@example.com"}
                </span>
              )}
            </div>

            <div className={styles.detailRow}>
              <label className={styles.label}>Phone:</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              ) : (
                <span className={styles.value}>
                  {userData.phone || "Not provided"}
                </span>
              )}
            </div>

            <div className={styles.detailRow}>
              <label className={styles.label}>Date of Birth:</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={userData.dateOfBirth}
                  onChange={handleChange}
                  className={styles.input}
                />
              ) : (
                <span className={styles.value}>
                  {userData.dateOfBirth
                    ? new Date(userData.dateOfBirth).toLocaleDateString()
                    : "Not provided"}
                </span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className={styles.buttonGroup}>
              <button className={styles.saveButton} onClick={handleSave}>
                Save Changes
              </button>
              <button className={styles.cancelButton} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          )}

          {/* Account Actions */}
          <div className={styles.accountActions}>
            {!isEditing && (
              <button
                className={styles.editButton}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
            <button
              className={styles.changePasswordButton}
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Courses Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Courses</h2>
          <div className={styles.sectionContent}>
            <p className={styles.placeholderText}>
              Browse our available courses to get started with your learning
              journey.
            </p>
          </div>
        </div>

        {/* Certificates Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Certificates</h2>
          <div className={styles.sectionContent}>
            <p className={styles.placeholderText}>
              No certificates earned yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
