import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';
import CheckPrice from "./CheckPrice";

const Hero = () => {
    const [images, setImages] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const importImages = async () => {
            const context = require.context('../../public/propertyImg', false, /\.(png|jpe?g|mp4)$/);
            const imagePaths = context.keys().map((key) => ({
                path: key.replace('./', '/propertyImg/'),
            
            }));
            setImages(imagePaths);
        };
        importImages();
    }, []);

    
    useEffect(() => {
        if (!images.length || images[currentIndex]?.isVideo) return;

        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex, images]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

   

    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                {images.length > 0 && (
                    <div className={styles.imageWrapper}>

                        <img
                            src={images[currentIndex].path}
                            alt={`Slide ${currentIndex + 1}`}
                            className={styles.heroMedia}
                        />
                    </div>
                )}

                <div className={styles.textOverlay}>
                    <h1 className={styles.locationName}>Sea La Vie</h1>
                    <p className={styles.locationDetails}>Alibagh, Maharashtra</p>

                    <div className={styles.xSeriesBlock}>
                        <div className={styles.xSeriesText}>
                            <span className={styles.x}>X</span>
                            <span className={styles.series}>SERIES</span>
                        </div>
                    </div>
                </div>

                <div className={styles.carouselInfo}>
                    {images[currentIndex] && !images[currentIndex].isVideo && (
                        <div className={styles.imageCount}>
                            <img
                                src={images[currentIndex].path}
                                alt="Thumbnail"
                                className={styles.thumbnail}
                            />
                            <span className={styles.imageNumber}>+{images.length}</span>
                        </div>
                    )}
                     <div className={styles.checkPrice}><CheckPrice/></div>
                </div> 
            </div>

            
            <div className={styles.carouselDots}>
                {images.slice(0, 3).map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
                
            </div>
            
        </section>
    );
};

export default Hero;