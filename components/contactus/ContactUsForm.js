import React from "react";
import style from "./contact-us-form.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

function ContactUsForm() {
  return (
    <>
      <div className={style.header}>
        <h3>Fill the form to get in touch</h3>
      </div>
      <div className={style.form}>
        <div data-aos="flip-left" className={style.sidebar}>
          <div className={style.contact_us}>
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
        <div className={style.form_details}>
          <div className={style.inputs}>
            <label htmlFor="">Email Id</label>
            <input type="text" placeholder="Enter email id" />
          </div>
          <div className={style.inputs}>
            <label htmlFor="">Subject </label>
            <input type="text" placeholder="Enter subject" />
          </div>
          <div className={style.inputs}>
            <label htmlFor="">Message </label>
            <textarea cols="30" rows="10" placeholder="Enter message" />
          </div>
          <div className={style.inputs}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;
