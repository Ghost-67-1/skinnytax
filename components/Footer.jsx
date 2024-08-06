

import { RiTwitterXLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";

export default function Footer(){
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="footer__copyright d-flex align-items-center">
                <div>Copyright &copy; 2024 SkinnyTax. All Rights Reserved.</div>
                <ul id="menu-copyright-menu" className="nav">
                  <li
                    id="menu-item-173"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-173 nav-item"
                  >
                    <Link
                      href="/privacy-policy"
                      className="nav-link"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footer__social__icons">
              <div className="footer__social">
                <span className="footer__social__getin">Get in Touch:</span>
                <a
                  href="https://twitter.com/Skinnytax_"
                  target="_blank"
                  className="social-item"
                  aria-label="Follow us on X"
                  rel="noreferrer noopener"
                >
                    <RiTwitterXLine />
                </a>
                <a
                  href="https://www.instagram.com/skinnytax/"
                  target="_blank"
                  className="social-item"
                  aria-label="Follow us on Instagram"
                  rel="noreferrer noopener"
                >
                    <LuInstagram/>
                </a>
                <a
                  href="https://www.linkedin.com/company/skinnytax"
                  target="_blank"
                  className="social-item"
                  aria-label="Follow us on Linkedin"
                  rel="noreferrer noopener"
                >
                    <IoLogoLinkedin/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  