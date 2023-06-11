import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {useState} from 'react'

import imageOne from '../assets/image-product-1.jpg';
import imageTwo from '../assets/image-product-2.jpg';
import imageThree from '../assets/image-product-3.jpg';
import imageFour from '../assets/image-product-4.jpg';
import thumbOne from '../assets/image-product-1-thumbnail.jpg'
import thumbTwo from '../assets/image-product-2-thumbnail.jpg'
import thumbThree from '../assets/image-product-3-thumbnail.jpg'
import thumbFour from '../assets/image-product-4-thumbnail.jpg'
import CartModal from './CartModal';

const images = [
  { id: 1, src: imageOne, alt: "picture of shoes" },
  { id: 2, src: imageTwo, alt: "picture of shoes" },
  { id: 3, src: imageThree, alt: "picture of shoes" },
  { id: 4, src: imageFour, alt: "picture of shoes" }
];

const thumbnails = [
  {id: 1, src: thumbOne, alt: "picture of shoes"},
  {id: 2, src: thumbTwo, alt: "picture of shoes"},
  {id: 3, src: thumbThree, alt: "picture of shoes"},
  {id: 4, src: thumbFour, alt: "picture of shoes"},

]

function Carousel({cartActive, setCartItems, cartItems, setCount, count, cost, setCost}) {

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeThumbnail, setActiveThumbnail] = useState(thumbnails[0].id);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Swiper configuration options
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Cleanup Swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);
 
  const handleThumbnailClick = (thumbnailId) => {
    const selectedThumbnail = thumbnails.find((thumbnail) => thumbnail.id === thumbnailId);
    const selectedImage = images.find((image) => image.id === thumbnailId);

    if (selectedThumbnail && selectedImage) {
      setSelectedImage(selectedImage);
      setActiveThumbnail(thumbnailId);
    }
  };

  const activeStyle = 'thumb-overlay absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-whiteoverlay border-2 border-orange '

  return (
   <article className='flex flex-col gap-[2rem]'>

    <div  className="swiper-container relative desktop:hidden">
      <div className="swiper-scrollbar"></div>
      <div className="swiper-wrapper">
        {images.map((image) => (
          <div className="swiper-slide" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <CartModal cartActive={cartActive} setCartItems={setCartItems} cartItems={cartItems} setCount={setCount} count={count} setCost={setCost} cost={cost}/>
    </div>

    <div id="pic-frame" className='hidden desktop:block border-b opacity-1 transition-opacity duration-300'>
    {selectedImage && (
          <img className='rounded-lg' src={selectedImage.src} alt={selectedImage.alt} />
        )}
    </div>

    <div className='thumbnails'>
      {thumbnails.map((thumbnail) => (
        <div className="thumbnail w-[88px] h-[88px] hover:scale-105 relative" key={thumbnail.id}>
          <img className="rounded-lg cursor-pointer " src={thumbnail.src} alt={thumbnail.alt} onClick={() => handleThumbnailClick(thumbnail.id)}/>
          <div className={`${thumbnail.id === activeThumbnail ? `${activeStyle}` : 'border-transparent'}`}/>
        </div>
      ))}
    </div>

    </article>
  );
}

export default Carousel;
