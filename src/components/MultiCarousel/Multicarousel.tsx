'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
};

const Multicarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel infinite autoPlay responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default Multicarousel;
