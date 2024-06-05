import gal1 from "../assets/gallary-img/gal-1.png";
import gal2 from "../assets/gallary-img/gal-2.png";
import gal3 from "../assets/gallary-img/gal-3.png";
import gal4 from "../assets/gallary-img/gal-4.png";

export interface GalleryType {
  id: number;
  src: string;
}

const galleries: GalleryType[] = [
  { id: 1, src: gal1 },
  { id: 2, src: gal2 },
  { id: 3, src: gal3 },
  { id: 4, src: gal4 },
];

export default galleries;
