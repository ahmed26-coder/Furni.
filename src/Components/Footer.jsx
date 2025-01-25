import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer_dish">
                <h3>Furni.</h3>
                <p>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is </p>
                <div className="dish_icon">
                    <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target='_blank'><FaFacebook /></a>
                    <a href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target='_blank'><FaInstagramSquare /></a>
                    <a href="https://github.com/ahmed26-coder" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer_link1">
                <li><a href="#about">About Us</a></li>
                <li><a href="#servisec">Servisec</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">contact Us</a></li>
            </div>
            <div className="footer_link2">
                <p>Support</p>
                <p>Knowledge base</p>
                <p>Live chat</p>
            </div>
            <div className="footer_link3">
                <p>Jobs</p>
                <p>Our team</p>
                <p>Leadership</p>
                <p>Privacy Policy</p>
            </div>
            <div className="footer_link4">
                <p>Nordic Chair</p>
                <p>Kruzo Aero</p>
                <p>Ergonomic</p>
            </div>
      </div>
      <div className="separator"></div>
      <div className="footer_bottom">
        <small>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</small>
        <small className="small1">Terms & Conditions</small>
        <small className="small2">Privacy Policy</small>
      </div>
    </>
  );
}

export default Footer;
