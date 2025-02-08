"use client";
import { ImageGallery } from "react-image-grid-gallery";
import photo1 from "../assets/gallery/photo1.png";
import photo2 from "../assets/gallery/photo2.png";
import photo3 from "../assets/gallery/photo3.png";
import photo4 from "../assets/gallery/photo4.png";
import photo5 from "../assets/gallery/photo5.png";
import photo6 from "../assets/gallery/photo6.png";
import photo7 from "../assets/gallery/photo7.jpg";
import photo8 from "../assets/gallery/photo8.jpg";
import photo9 from "../assets/gallery/photo9.jpg";
import photo10 from "../assets/gallery/photo10.jpg";
import photo11 from "../assets/gallery/hari.jpg";

const imagesArray = [
  {
    id: "uniqueid111",
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: photo1,
  },
  {
    id: "uniqueid222",
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: photo2,
  },
  {
    id: "uniqueid333",
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: photo3,
  },
  {
    id: "uniqueid4",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo4,
  },
  {
    id: "uniqueid5",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo5,
  },
  {
    id: "uniqueid333",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo6,
  },
  {
    id: "uniqueid7",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo7,
  },
  {
    id: "uniqueid8",
    alt: "Image's alt text",
    caption: "Image3's description",
    src: photo8,
  },
  {
    id: "uniqueid9",
    alt: "Image's alt text",
    caption: "Image3's description",
    src: photo9,
  },
  {
    id: "uniqueid10",
    alt: "Image's alt text",
    caption: "Image3's description",
    src: photo10,
  },
  {
    id: "uniqueid11",
    alt: "Image's alt text",
    caption: "Image3's description",
    src: photo11,
  },
  {
    id: "uniqueid4",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo4,
  },
  {
    id: "uniqueid4",
    alt: "Image's alt text",
    caption: "Image's description",
    src: photo4,
  },
];

export default function App() {
  return (
    <div className=" py-5 px-30 bg-gray-100">
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={300}
        gapSize={10}
      />
    </div>
  );
}
