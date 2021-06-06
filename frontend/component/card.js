import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/card.module.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const CardBox = ({ card }) => {
  const { API_URL } = process.env;
  return (
    <div>
      <Card>
        <Image width={500} height={500} src={API_URL + card.img.url} />
        <CardBody>
          <CardTitle tag='h5'>{card.CardName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Link href='/User/[slug]' as={`/User/${card.slug}`}>
            <h4 className={css.link}> Click me for more detail</h4>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardBox;
