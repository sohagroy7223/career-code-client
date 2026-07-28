import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/sohag-roy-/">
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.facebook.com/sohag.roy.283426">
            <FaFacebook size={25} />
          </a>
          <a href="https://github.com/sohagroy7223">
            <FaGithub size={25} />
          </a>
          <a href="https://x.com/sohag_roy7223">
            <FaSquareXTwitter size={25} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
