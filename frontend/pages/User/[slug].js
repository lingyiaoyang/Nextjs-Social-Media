import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function UserDetail({ card }) {
  const { API_URL } = process.env;
  // console.log('🚀 -> file: [slug].js -> line 4 -> UserDetail -> card', card);
  return (
    <div
      style={{ height: '500px', margin: '5px 0px', border: '1px solid black' }}
    >
      {card.map((card) => {
        return (
          <div
            style={{
              height: '400px',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
              border: '1px solid red',
            }}
            key={card.id}
          >
            <p className='col-6' style={{ border: '1px solid green' }}>
              {card.CardName}
            </p>
            <div
              className='col-6'
              style={{
                // boxSizing: 'border-box',
                border: '5px solid red',
                // height: '400px',

                // width: '250px',
              }}
            >
              <Image
                height={card.img.height}
                width={card.img.width}
                // widht={1000}
                layout='responsive'
                src={API_URL + card.img.url}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(
  //   '🚀 -> file: [slug].js -> line 14 -> getServerSideProps -> context',
  //   context.query
  // );
  // console.log(context.query.slug);
  const { API_URL } = process.env;

  const { slug } = context.query;

  const res = await fetch(`${API_URL}/cards?slug=${slug}`);
  const card = await res.json();

  return {
    props: {
      card: card,
    },
  };
}

export default UserDetail;
