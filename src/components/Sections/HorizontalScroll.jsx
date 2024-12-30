import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Star } from 'lucide-react';

const RestaurantCard = ({ name, cuisine, rating, time, imageUrl }) => (
  <div className="flex-shrink-0 w-64 rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-40">
      <img 
        src="/api/placeholder/256/160"
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium">
        {time} mins
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg truncate">{name}</h3>
      <p className="text-gray-600 text-sm mb-2 truncate">{cuisine}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
          <Star className="w-4 h-4 text-green-600 fill-current" />
          <span className="text-sm font-medium text-green-600">{rating}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{time} mins</span>
        </div>
      </div>
    </div>
  </div>
);

const HorizontalScroll = () => {
  const scrollRef = React.useRef(null);
  const [showLeftButton, setShowLeftButton] = React.useState(false);
  const [showRightButton, setShowRightButton] = React.useState(true);

  const restaurants = [
    { name: "Tasty Bites", cuisine: "North Indian, Chinese", rating: "4.2", time: "30" },
    { name: "Pizza Paradise", cuisine: "Italian, Fast Food", rating: "4.5", time: "25" },
    { name: "Sushi Station", cuisine: "Japanese, Asian", rating: "4.3", time: "35" },
    { name: "Burger Boulevard", cuisine: "American, Fast Food", rating: "4.1", time: "20" },
    { name: "Spice Route", cuisine: "Indian, Mughlai", rating: "4.4", time: "40" },
    { name: "Wok This Way", cuisine: "Chinese, Thai", rating: "4.0", time: "30" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  React.useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {showLeftButton && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>

      {showRightButton && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;