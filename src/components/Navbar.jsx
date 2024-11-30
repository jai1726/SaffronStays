// components/Navbar.jsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>

            <div className={styles.left}>
                <div className={styles.xseries}>
                    <span className={styles.x}>X</span>
                    <span>SERIES</span>
                </div>

                <div className={styles.search}>
                    <div className={styles.searchBar}>
                        <i className="fa fa-search" style={{ color: '#CCCCCC' }}></i>
                        <input
                            type="text"
                            placeholder="Search for location, villa, facilities..."
                        />
                    </div>
                </div>
            </div>

            <div className={styles.options}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="SaffronStays" />
                    <span className={styles.companyName}>SaffronStays</span>
                </div>

                <div className={styles.mobile}>
                    <i className="fa fa-phone"></i>
                    <span>+91-1234567890</span>
                </div>

                <div className={styles.loginButton}>
                    <button >Login</button>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;