// CarouselItem.js
import React from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

const CarouselItem = ({ quote, author, img }) => {
  return (
    <div className={`${styles.testimonial} p-12 shadow-md rounded-lg text-center border-2 bg-background`}>
      <Image src={img} alt={`${author} testimonial image`} className={`mx-auto my-4 rounded-full`} height={100} width={100} />
      <p className={styles.quote}>{quote}</p>
      <p className={styles.author}>- {author}</p>
    </div>
  );
};

export default CarouselItem;
