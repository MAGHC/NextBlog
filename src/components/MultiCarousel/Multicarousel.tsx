'use client';

import style from './Multicarousel.module.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 654 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 654, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Multicarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel itemClass={style.item} autoPlaySpeed={3000} infinite autoPlay responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default Multicarousel;
