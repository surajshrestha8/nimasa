import { StaticImageData } from "next/image";
import SliderImage1 from "../../../public/slider-image-1.jpg";
import SliderImage2 from "../../../public/slider-image-2.jpg";
import SliderImage3 from "../../../public/slider-image-3.jpg";
import SliderImage4 from "../../../public/slider-image-4.jpg";

export interface SliderImageProps {
    id: number;
    imageSrc: StaticImageData;
    altText: string;
}

export const SliderImages: Array<SliderImageProps> = [
  {
    id: 1,
    imageSrc: SliderImage1,
    altText: 'slider image 1'
  },

  {
    id: 2,
    imageSrc: SliderImage2,
    altText: 'slider image 2'
  },
  {
    id: 3,
    imageSrc: SliderImage3,
    altText: 'slider image 3'
  },
  {
    id: 4,
    imageSrc: SliderImage4,
    altText: 'slider image 4'
  },
];
