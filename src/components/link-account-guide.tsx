'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './link-account-guide.module.scss';
import { RegisterButton } from './ui/register-button';
import { SectionTitle } from './ui/section-title';

export function LinkAccountGuide() {
  const t = useTranslations('link-account');

  return (
    <section className={styles.guide}>
      <SectionTitle>{t('how-to-link')}</SectionTitle>
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
            <p>{t('install-app')}</p>
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
            <p>{t('login-create')}</p>
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
            <p>{t('click-account')}</p>
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
            <p>{t('click-link-account')}</p>
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
            <p>{t('select-server')}</p>
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
            <p>{t('fill-in')}</p>
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
            <p>{t('click-copy-trade')}</p>
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
            <p>{t('click-done')}</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <RegisterButton />
    </section>
  );
}
