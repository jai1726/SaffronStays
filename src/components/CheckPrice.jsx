import React, { useState } from 'react';
import {FaCalendarAlt, FaChevronUp, FaChevronDown,FaUserFriends}from "react-icons/fa";
import styles from '../styles/CheckPrice.module.css';

const CheckPrice = () => {
    const [guests, setGuests] = useState(1);

    return (
        <div className={styles.priceContainer}>
            <div className={styles.priceBox}>
                <div className={styles.priceDetails}>
                    <p className={styles.originalPrice}>₹1,49,086</p>
                    <p className={styles.discountPrice}>₹1,00,086/
                        <span className={styles.night}>Night</span></p>
                </div>
                <div className={styles.goldy}>
                    <div className={styles.brder}>
                        <span className={styles.par}>Special discounts available!!</span>
                        <span className={styles.goldbutton}>Unlock Price</span>
                    </div>
                </div>
                <div className={styles.dateInputBlock}>
    <div className={styles.inputWrapper}>
        <div className={styles.calendarIcon}>
            <FaCalendarAlt size={20} color="#999999" />
        </div>
        <div className={styles.checkInOutText}>
            Check-in - Check-out
        </div>
        <div className={styles.inputContainer}>
            
            <div className={styles.iconGroup}>
              
                <FaChevronUp className={styles.upIcon} color="#999999"/>
                <FaChevronDown className={styles.downIcon}color="#999999" />
            </div>
        </div>
    </div>
</div>

<div className={styles.guestInputBlock}>
    <div className={styles.inputWrapper}>
        <div className={styles.guestIcon}>
           
            <FaUserFriends size={20} color="#999999" />
        </div>
        <div className={styles.guestCountText}>
            2 Guests
        </div>
        <div className={styles.inputContainer}>
            
            <div className={styles.iconGroup}>
                <FaChevronUp className={styles.upIcon}  color="#999999"/>
                <FaChevronDown className={styles.downIcon} color="#999999" />
            </div>
        </div>
    </div>
</div>


                <button className={styles.checkButton}>Check Availability</button>
            </div>

            
        </div>
    );
};

export default CheckPrice;