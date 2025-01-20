'use client';

import { useEffect, useState } from "react";
import { getRandomBigImage, getRandomImage } from "../services/picture.service";

export default function usePicture() {
    
    const [dogImage, setDogImage] = useState<string | null>(null);
      const [catImage, setCatImage] = useState<string | null>(null);

      const [dogBigImage, setDogBigImage] = useState<string | null>(null);
    const [catBigImage, setCatBigImage] = useState<string | null>(null);
  
    
      useEffect(() => {
        getRandomImage('dog').then((image) => setDogImage(image));
        getRandomImage('cat').then((image) => setCatImage(image));
        getRandomBigImage('dog').then((image) => setDogBigImage(image));
      getRandomBigImage('cat').then((image) => setCatBigImage(image));
      }, []);
    

      return { dogImage, catImage, dogBigImage, catBigImage}
};