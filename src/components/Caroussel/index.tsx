import { useState, useRef } from "react";
/**
 * TODO: fix slider when user click on it
 */

const Carousel = ({slides}: {slides: { image: string; title: string; description: string }[];}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0); 
  const touchEndX = useRef(0); 

  
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDifference = touchStartX.current - touchEndX.current;

    
    if (touchDifference > 50) {
      goToSlide(currentIndex + 1); 
    } else if (touchDifference < -50) {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-100 py-12 md:overflow-x-visible md:bg-white`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full md:min-w-0 md:py-12 md:w-1/4 ${index === 0 ? "md:bg-white" : index === 1? "md:bg-black/10": index === 2? "md:bg-black/20": "md:bg-black/70"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[225px] w-full object-contain md:h-[300px]"
            />
            <div
              className={`mt-2 text-center flex flex-col items-center px-4 md:items-start md:text-left ${index <= 2 ? "md:text-black" : "md:text-white"}`}
            >
              <h2 className="text-3xl font-normal ">{slide.title}</h2>
              <p className="opacity-50 md:mt-2">{slide.description}</p>
              <button className="mt-4 text-lg text-black font-semibold border border-black rounded-lg py-2 px-8">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs */}
      <div className="mt-10 flex justify-center gap-3 md:none md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
