import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const carousel = ({ card }) => {
  const { API_URL } = process.env;

  const slideImg = card.map((item) => {
    return item.img;
  });

  const items = [
    {
      src: `${
        API_URL +                                           
        slideImg.map((item) => {
          return item;
        })
      }`,
    },
  ];
  console.log('🚀 -> file: carousel.js -> line 24 -> carousel -> items', items);

  return (
    <div style={{ border: '1px solid red', padding: '15px' }}>
      
      
      <UncontrolledCarousel key={card.id} items={items} />
      {/* <div>container</div> */}
    </div>
  
  );
};

export default carousel;
