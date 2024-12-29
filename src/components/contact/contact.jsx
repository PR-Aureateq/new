import React from "react";
import './contact.css';

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="form-wrapper">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>If you have any questions or inquiries, feel free to email us at <a href="mailto:info@aureateq.com">info@aureateq.com</a>, and we will respond as soon as possible!</p>
          </div>

          <div className="social">
            <div>Follow us on LinkedIn</div>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://linkedin.com/company/aureateq" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <p>&copy; 2024 Aureateq</p>
      </div>
    </div>
  );
};
