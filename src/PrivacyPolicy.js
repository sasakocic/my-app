import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy-container">
      <h1 className="PrivacyPolicy-heading">Privacy Policy</h1>
      <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.</p>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">1. Information Collection</h2>
        <p className="PrivacyPolicy-content">We may collect personal information from you when you:</p>
        <ul className="PrivacyPolicy-list">
          <li className="PrivacyPolicy-list-item">Sign up for an account</li>
          <li className="PrivacyPolicy-list-item">Submit a contact form</li>
          <li className="PrivacyPolicy-list-item">Make a purchase</li>
          <li className="PrivacyPolicy-list-item">Subscribe to our newsletter</li>
        </ul>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">2. Information Usage</h2>
        <p className="PrivacyPolicy-content">We may use your personal information to:</p>
        <ul className="PrivacyPolicy-list">
          <li className="PrivacyPolicy-list-item">Provide and improve our services</li>
          <li className="PrivacyPolicy-list-item">Process transactions</li>
          <li className="PrivacyPolicy-list-item">Send periodic emails</li>
        </ul>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">3. Information Protection</h2>
        <p className="PrivacyPolicy-content">We implement security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.</p>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">4. Information Sharing</h2>
        <p className="PrivacyPolicy-content">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website.</p>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">5. Cookies</h2>
        <p className="PrivacyPolicy-content">We use cookies to enhance your experience on our website. You can choose to disable cookies in your browser settings, but it may affect certain functionality.</p>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">6. External Links</h2>
        <p className="PrivacyPolicy-content">Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites, and we are not responsible for their privacy policies.</p>
      </div>

      <div className="PrivacyPolicy-section">
        <h2 className="PrivacyPolicy-subheading">7. Updates to Privacy Policy</h2>
        <p className="PrivacyPolicy-content">We reserve the right to update this Privacy Policy at any time. We encourage you to review this page periodically for any changes.</p>
      </div>

      <p className="PrivacyPolicy-content">If you have any questions or concerns regarding this Privacy Policy, please contact us.</p>
    </div>
  );
}

export default PrivacyPolicy;
