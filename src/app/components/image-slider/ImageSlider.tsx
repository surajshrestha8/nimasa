import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { SliderImageProps, SliderImages } from "@/app/constants/slider-images";

const ImageSlider = () => {
  return (
    <>
      <Carousel style={{ height: '500px'}}>
        {SliderImages.map((slider: SliderImageProps) => (
          <Image
            key={slider.id}
            src={slider.imageSrc}
            alt={slider.altText}
            height={500}
            width={500}
          />
        ))}
      </Carousel>
    </>
  );
};

export default ImageSlider;
