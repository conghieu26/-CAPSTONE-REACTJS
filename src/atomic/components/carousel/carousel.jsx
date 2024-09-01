import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
export function Carousel({ image }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(image);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const checkData =
    !image || image.length === 0 ? (
      <p>Loading data...</p>
    ) : (
      image[currentIndex].hinhAnh
    );
  return (
    <div className=" h-[780px] w-full relative group">
      <div
        style={{ backgroundImage: `url(${checkData})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[95%] w-[100%] text-white flex top justify-center py-2">
        {image.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
