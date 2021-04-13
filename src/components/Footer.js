import React from 'react';
import facebook from '.././images/icon-facebook.svg';
import twitter from '.././images/icon-twitter.svg';
import pinterest from '.././images/icon-pinterest.svg';
import instagram from '.././images/icon-instagram.svg';
import logo from '.././images/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <h2>Boost your links today</h2>
        <a href="/#" className="btn cyan">
          Get Stared
        </a>
      </div>
      <div className="back_black">
        <div className="lower sudo_container">
          <img src={logo} className="fill_white" alt="logo" />
          <div className="div_gap">
            <ul>
              <li className="frc">Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="div_gap">
            <ul>
              <li className="frc">Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="div_gap">
            <ul>
              <li className="frc">Company</li>
              <li>About</li>
              <li>our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="icon_gap">
            <ul className="icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} className="fill_cyan" alt="facebook" />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} className="fill_cyan" alt="twitter" />
              </a>
              <a
                href="https://in.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pinterest} className="fill_cyan" alt="pinterest" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} className="fill_cyan" alt="instagram" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
