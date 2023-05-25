import React from 'react';
import './Imprint.css';

function Imprint() {
  return (
    <div className="Imprint-container">
      <h1 className="Imprint-heading">Imprint</h1>
      <h2 className="Imprint-subheading">IT Spektar</h2>
      <p className="Imprint-content">Fehnweg 163, Hamburg</p>
      <p className="Imprint-content">Phone: +49 123-456-7890</p>
      <p className="Imprint-content">Email: info@itspektar.com</p>

      <h2 className="Imprint-subheading">Represented by</h2>
      <p className="Imprint-content">Sasa Kocic (CEO)</p>

      <h2 className="Imprint-subheading">Registration Details</h2>
      <p className="Imprint-content">Company Registration Number: 12345678</p>
      <p className="Imprint-content">VAT ID: DE123456789</p>

      <h2 className="Imprint-subheading">Disclaimer</h2>
      <p className="Imprint-content">This website is for informational purposes only. We strive to keep the information on this website accurate and up-to-date, but we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website. Any reliance you place on such information is therefore strictly at your own risk.</p>

      <h2 className="Imprint-subheading">Liability for Links</h2>
      <p className="Imprint-content">Our website may contain links to external websites. We have no control over the content and availability of those sites and are not responsible for any damages or losses incurred through the use of those links.</p>

      <h2 className="Imprint-subheading">Copyright</h2>
      <p className="Imprint-content">All content on this website, including text, graphics, logos, images, and software, is the property of IT Spektar and is protected by international copyright laws.</p>

      <p className="Imprint-content">If you have any questions or concerns regarding this imprint, please contact us.</p>
    </div>
  );
}

export default Imprint;
