import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import CarouselItem from './CarouselItem';
import styles from './Carousel.module.css';
import img from '../../public/images/placehold-100x100.png';

const testimonialsData = [
  {
    quote: 'This testimonial carousel is amazing!',
    author: 'John Doe',
    img: img,
  },
  {
    quote: "I'm really impressed with how easy it is to use.",
    author: 'Jane Smith',
    img: img,
  },
  {
    quote: 'Great job! Keep up the good work.',
    author: 'Alice Johnson',
    img: img,
  },
  {
    quote: 'Highly recommend this product!',
    author: 'Bob Brown',
    img: img,
  },
  {
    quote: 'Fantastic experience. Will definitely come back.',
    author: 'Emily Wilson',
    img: img,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(''); // State for animation direction

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
    setAnimationDirection('prev'); // Set animation direction
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonialsData.length;
    setAnimationDirection('next'); // Set animation direction
    setCurrentIndex(newIndex);
  };

  return (
    <div className="py-24">
      <h3 className="text-center text-5xl pb-6">Testimonials</h3>
      <div className={`${styles.carousel} relative`}>
        <button
          className={`${styles.nextButton} absolute top-1/2 px-3 transform -translate-y-1/2 -right-20 bottom-0 bg-background border-secondaryLight border text-white rounded-full h-12 w-12 flex items-center justify-center hover:scale-90`}
          onClick={goToNextSlide}
        >
          <SlArrowRight className="text-secondaryLight transform scale-150" />
        </button>
        <div className={styles.testimonial}>
          <CarouselItem
            {...testimonialsData[currentIndex]}
            animationDirection={animationDirection} // Pass animation direction as prop
          />
        </div>
        <button
          className={`${styles.prevButton} absolute top-1/2 border border-secondaryLight px-3 transform -translate-y-1/2 -left-20 p-0 bg-background text-white rounded-full bottom-0 h-12 w-12 flex items-center justify-center hover:scale-90`}
          onClick={goToPrevSlide}
        >
          <SlArrowLeft className="text-secondaryLight transform scale-150" />
        </button>
      </div>
    </div>
  );
}
