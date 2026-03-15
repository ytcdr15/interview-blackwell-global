'use client';

import Image from 'next/image';
import styles from './link-account-guide.module.scss';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { RegisterButton } from './ui/register-button';
import { SectionTitle } from './ui/section-title';

export function LinkAccountGuide() {
  return (
    <section className={styles.guide}>
      <SectionTitle>How to Link MT4 Account</SectionTitle>
      <Swiper
        className={styles.slides}
        modules={[Navigation, A11y, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
        }}
        navigation
        autoplay={{ delay: 3200, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={styles.slide} data-index={1}>
          <div className={styles.card}>
            <Image
              src='/images/step-1-69b3f0e92267e.webp'
              width={320}
              height={320}
              alt='step-1'
            />
            <p>Install our app, &quot;Blackwell Invest&quot;</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-2-69b3f0e9352da.webp'
              width={320}
              height={320}
              alt='step-2'
            />
            <p>Login OR create a new account</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-3-69b3f0eaa3dd2.webp'
              width={320}
              height={320}
              alt='step-3'
            />
            <p>Click &quot;Account&quot;</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-4-69b3f0eacfaaf.webp'
              width={320}
              height={320}
              alt='step-4'
            />
            <p>Click &quot;Link an account&quot;</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-5-69b3f0ec378bd.webp'
              width={320}
              height={320}
              alt='step-5'
            />
            <p>Select &quot;BlackwellGlobalAsia-Live&quot; server</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-6-69b3f0ec8e141.webp'
              width={320}
              height={320}
              alt='step-6'
            />
            <p>
              Fill in your Blackwell Global trading account OR create a new
              account
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-7-69b3f0edc9608.webp'
              width={320}
              height={320}
              alt='step-7'
            />
            <p>Click &quot;Copy Trades&quot;</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.card}>
            <Image
              src='/images/step-8-69b3f0ee30ffc.webp'
              width={320}
              height={320}
              alt='step-8'
            />
            <p>Click &quot;Done&quot;</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <RegisterButton />
    </section>
  );
}
