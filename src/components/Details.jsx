import React from 'react';
import { FaStar, FaRegHeart, FaHome, FaUser, FaBed, FaPaw } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { TbAirConditioning, TbParking } from "react-icons/tb";
import { LuSquareDot } from "react-icons/lu";
import styles from '../styles/Details.module.css';

const infoBlocks = [
    { id: 1, Icon: FaHome, text: "Entire Villa" },
    { id: 2, Icon: FaUser, text: "6-12 Guests" },
    { id: 3, Icon: FaBed, text: "8 Bedrooms" },
    { id: 4, Icon: FaPaw, text: "Pet-Friendly" },
];
const aboutBlocks = [
    { id: 1, text: "House Rules" },
    { id: 2, text: "Cancellation Policy" },
    { id: 3, text: "Things you need to know" },
    { id: 4, text: "Things to do" },
];
const amenitiesBlocks = [
    { id: 1, Icon: FaBed, text: "4 Bedrooms" },
    { id: 2, Icon: FaUser, text: "12 Guests" },
    { id: 3, Icon: TbParking, text: "Free parking" },
    { id: 4, Icon: TbAirConditioning, text: "Air conditioning" },
    { id: 5, Icon: FaBed, text: "4 Bedrooms" },
    { id: 6, Icon: FaUser, text: "12 Guests" },
];

const Details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.left}>
                <div className={styles.rating}>
                    <div className={styles.ratingLeft}>
                        <FaStar className={styles.starIcon} color="#FFD700" size={20} />
                        <span>4.5 /5</span>
                        <span>105 reviews</span>
                    </div>
                    <div className={styles.ratingIcon}>
                        <span className={styles.share}><FiShare2 /></span>
                        <span className={styles.heart}><FaRegHeart /></span>
                      

                    </div>

                </div>
                <div className={styles.options}>
                    {infoBlocks.map(({ id, Icon, text }) => (
                        <div key={id} className={styles.block}>
                            <Icon className={styles.icon} size={20} />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.about}>
                    <h2 className={styles.heading}>About</h2>
                    <ul className={styles.ulp}>
                        <li>Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh</li>
                        <li>The tourist-favourite Bhimtal Lake is only a stone’s throw away.<span className={styles.readmore}>ReadMore</span></li>
                    </ul>
                    <div className={styles.aboutdiv}>
                        {aboutBlocks.map(({ id, text }) => (
                            <div key={id} className={styles.aboutblock}>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.amenities}>
                    <span><h2 className={styles.heading}>Amenities</h2></span>
                    <div className={styles.amenitiesSection}>
                        {amenitiesBlocks.map(({ id, Icon, text }) => (
                            <div key={id} className={styles.gblock}>
                                <Icon className={styles.icon} color="#888888" size={24} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                    <span className={styles.aboutblock}>View All Amenities</span>
                </div>
                <div className={styles.meals}>
                <span><h2 className={styles.heading}>Meals</h2></span>
                <span><p>A cook is available to prepare local specialities and a delicious spread of home-cooked meals all day, at an additional charge</p></span>
                <div className={styles.vegdiv}>
                 <div className={styles.vegicon}> 
                    <LuSquareDot color="#11BF0E" size={30} />
                        <span> Veg</span>
                    </div> 
                    <div className={styles.vegicon}> 
                    <LuSquareDot color="#FA4B4B" size={30} />
                        <span>Non Veg</span>
                    </div> 
                </div>
                <div className={styles.aboutdiv}>
                <span className={styles.aboutblock}>View Menu</span>
                <span className={styles.aboutblock}>Meal rate card</span>
                </div>
                </div>
            </div>
            <div className={styles.right}>
            
            </div>
        </div>
    )
}

export default Details
