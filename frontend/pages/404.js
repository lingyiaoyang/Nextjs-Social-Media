import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import css from '../styles/404.module.css';
import { backgroundImages, size } from 'polished';
// import Image from 'next/image';

const NotFoundPage = () => {
  const Router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.push('/');
    }, 6000);
  }, []);

  return (
    <div style={{ backgroundColor: 'gray' }} className={css.header}>
      <div style={{ padding: '15px' }}>
        <h1>404 Not Found</h1>
        <h2 style={{ color: 'black' }}>
          Maybe this page moved? Got deleted?
          <br /> Is hiding out in quarantine?Never existed in the first place?
        </h2>
        <br />
        <h3>
          Let's go <Link href='/'>home</Link> and try from there
        </h3>
        <br />
        <h4>will auto return back soon ......</h4>
      </div>
    </div>
  );
};

export default NotFoundPage;
