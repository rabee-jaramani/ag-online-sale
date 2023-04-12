import React from 'react';
import ag_logo from '../logos/ag_logo.svg';
export default function Footer() {
  return (
    <div className="footer">
      <div className="ag_footer">
        <a
          href="https://apparelgroupglobal.com/en/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ag_logo} alt="ag-logo" />
        </a>
      </div>
      <div className="social-list">
        <a
          href="https://www.facebook.com/ApparelGroupSocial"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://twitter.com/ApparelGroup_"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/apparelgroupofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.youtube.com/channel/UCk_Gjj6JkPU7OiBHYl0LA9Q"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/apparel-fzco/mycompany/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>

      <div>© Copyright 2023</div>
    </div>
  );
}
