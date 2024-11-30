import React from 'react';
import FooterColumn from './FooterColumn';
import styles from '../styles/Footer.module.css';
import { FaFacebookF ,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  const footerColumns = [
    {
      header: "Company",
      words: ["About Us", "Careers", "Press", "Blog"],
    },
    
    {
      header: "Contact",
      words: ["mail@saffronstays.com", "+91 3728253727", "Contact us", "Contact to Partner"],
    },
    {
      header: "Partner with us",
      words: ["List a home"],
    },
    {
      header: "Policies",
      words: ["Privacy Policy", "Terms", "Sitemap", "Cancellation Policy"],
    },
  ];

  return (
    <div>
      <div className={styles.footerContainer}>
      <div className={styles.logo}>
                    <img src="/logo.png" alt="SaffronStays" />
                    <span className={styles.companyName}>SaffronStays</span>
                </div>
        {footerColumns.map((fc, index) => (
          <FooterColumn key={index} header={fc.header} words={fc.words} />
        ))}
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerCopy}>© 2021 SaffronStays. All rights reserved</div>
        <div className={styles.footerIcons}>
          <FaFacebookF color="#FFFFFF" />
         <FaTwitter color="#FFFFFF"/>
         < FaYoutube color="#FFFFFF"/>
         <FaLinkedinIn color="#FFFFFF"/>
        </div>
      </div>
      <div className={styles.mobilePriceBox}>
      <div className={styles.priceDetails}>
                    <p className={styles.originalPrice}>₹1,49,086</p>
                    <p className={styles.discountPrice}>₹1,00,086/
                        <span className={styles.night}>Night</span></p>
                </div>
                <button className={styles.checkButton}>Check Availability</button>
            </div>
    </div>
  );
}