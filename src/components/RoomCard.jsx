import React from "react";
import styles from '../styles/RoomCard.module.css';

export default function RoomCard() {
  const roomData = [
    {
      imgLink: '/RealMoments/image2.png',
      description1: "Tucked away cosily in the lap of nature.",
      description2: "The tourist-favourite Bhimtal Lake is nearby.",
    },
    {
      imgLink: '/RealMoments/image2.png',
      description1: "Experience the serene beauty of the hills.",
      description2: "A perfect spot for relaxation and rejuvenation.",
    },
    {
      imgLink: '/RealMoments/image2.png',
      description1: "Luxurious rooms with breathtaking views.",
      description2: "Wake up to the chirping of birds every morning.",
    },
  ];

  return (
    <>
    <h2 className={styles.heading}>Rooms&Beds</h2>
    
    <div className={styles.roomList}>
          
      {roomData.map((room, index) => (
        <div key={index} className={styles.roomCard}>
          <div className={styles.imageContainer}>
            <img src={room.imgLink} alt={`Room ${index + 1}`} className={styles.roomImage} />
          </div>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.dot}></div>
              <p>{room.description1}</p>
            </div>
            <div className={styles.row}>
              <div className={styles.dot}></div>
              <p>{room.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}