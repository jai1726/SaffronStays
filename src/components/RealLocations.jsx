import React from 'react';
import styles from '../styles/RealLocation.module.css';

const RealLocations = () => {

  const cardData = [
    { imageSrc: '/RealMoments/image2.png', name: 'Vinay', date: 'Sep 03, 2023' },
    { imageSrc: '/RealMoments/image2.png', name: 'Vinay', date: 'Sep 03, 2023' },
    { imageSrc: '/RealMoments/image3.png', name: 'Vinay', date: 'Sep 03, 2023' }
  ];
  return (
    <div className={styles.container}>

      <div className={styles.real}>
        <h2 className={styles.heading}>Real Moments</h2>
        <div className={styles.cardContainer}>
          {cardData.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.imageSrc} alt={`Moment: ${card.name}`} className={styles.image} />
              <div className={styles.wrapper}>
                <p className={styles.cardName}>{card.name}</p>
                <p className={styles.cardDate}>{card.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className={styles.location}>
        <h2 className={styles.heading}>Location</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            title="Map"
            className={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className={styles.zoomControls}>
            <button className={styles.zoomButton}>+</button>
            <button className={styles.zoomButton}>-</button>
          </div>
        </div>
        <button className={styles.block}>Get Directions</button>
      </div>
      
    </div>
  );
};

export default RealLocations;
