import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousell from '../../component/carousel';

function UserDetail({ card, slugData }) {
  // console.log('🚀 -> file: [slug].js -> line 6 -> UserDetail -> card', card);
  const { API_URL } = process.env;

  return (
    <div style={{ marginTop: '15px', border: '5px solid black' }}>
      {slugData.map((card) => {
        return (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid red',
            }}
            key={card.id}
          >
            <div
              className='col-9'
              style={{
                padding: '5px',
                border: '1px solid green',
              }}
            >
              <h5 style={{ display: 'inline-block' }}>
                <strong>Name:</strong>
                {card.CardName}
                <br />
                <strong>Age:</strong>
                {card.CardName}
                <br />
                <strong>Where you from:</strong>
                {card.CardName} <br />
              </h5>
            </div>
            <div
              className='col-3'
              style={{
                border: '1px solid red',
                padding: '5px 0 0 0',
                display: 'flex',
              }}
            >
              <Image
                height={card.img.height}
                width={card.img.width}
                src={API_URL + card.img.url}
              />
              <div>this is nothing</div>
            </div>
          </div>
        );
      })}
      <div style={{ border: '1px solid red', height: '300px' }}>
        <Carousell card={card} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;

  const { slug } = context.query;

  const res = await fetch(`${API_URL}/cards?slug=${slug}`);
  const slugData = await res.json();

  const CardRes = await fetch(`${API_URL}/cards`);
  const card = await CardRes.json();

  

  return {
    props: {
      slugData: slugData,
      card: card,
    },
  };
}

export default UserDetail;
