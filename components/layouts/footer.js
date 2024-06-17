import React from "react";
import style from "./footer.module.scss";
import ImageAsset from "@/components/loader/ImageAsset";
import { PiHeadsetFill } from "react-icons/pi";
import NewsLetter from "@/components/addon/newletter/NewsLetter";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";

function Footer() {
  return (
    <div data-aos="fade-up"  className={"footer"}>
      <div className={`${style.footer}`}>
        <div className={style.label}>
          <div className="container">
            <div className={style.info}>
              <div className={style.icon}>
                <PiHeadsetFill />
                <b>Need Assistance ?</b>
              </div>
              <button>
                <a href="tel:+91 988 988 9888">Call Us</a>
              </button>
            </div>
          </div>
        </div>
        <footer className={"container"}>
          <div className={style.information}>
            <div className={style.brand}>
              <ImageAsset
                src={"https://static.cdnlogo.com/logos/l/75/lazada.svg"}
                alt="Vercel Logo"
                width={72}
                height={16}
              />
              <i>Electronics Shop By Code Sujit</i>
              <p>
                Step into the future of home living with "The World of
                Electrical Solutions for Modern Homes." This comprehensive guide
                is your gateway to transforming any living space into a smart,
                efficient, ...
              </p>
            </div>
            <div className={style.address}>
              <b>Address</b>
              <p>19A, Sunshine Building, Opp: Domino's Pizza,</p>
              <p>1st Cross Road, Lokhandwala, Market,</p>
              <p>Andheri West, Mumbai, Maharashtra 400053, India</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718614816033!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={style.links}>
              <b>Important Links</b>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <Link href={"/about"}>
                    <>About</>
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    <>Contact</>
                  </Link>
                </li>
                <li>
                  <Link href={"/help/faqs"}>
                    <>FAQ</>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.contact_us}>
              <b>Contact Us</b>
              <small>Get latest news and updates via email</small>
              <NewsLetter />

              <div className={style.phone}>
                <div className={style.icon}>
                  <FaPhoneAlt />
                </div>
                <div className={style.numbers}>
                  <p>+91 988 988 9888</p>
                  <p>+91 988 988 9888</p>
                </div>
              </div>
              <div className={style.phone}>
                <div className={style.icon}>
                  <HiOutlineEnvelope />
                </div>
                <div className={style.numbers}>
                  <p>test@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className={style.copy_right}>
          <p>Copyright © 2023 - 2024. All rights reserved.</p>
          <p>Powered by Code Sujit</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
