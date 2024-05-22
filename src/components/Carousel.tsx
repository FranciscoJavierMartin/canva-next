import './carousel.css';

export default function Carousel() {
  return (
    <div
      className='scroll-s inline-flex overflow-x-scroll scroll-smooth'
      style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
    >
      <div className='carousel-item'></div>
    </div>
  );
}
