import Image from 'next/image';
import { RegisterButton } from './ui/register-button';
import styles from './call-to-action.module.scss';
import clsx from 'clsx';
import { SectionTitle } from './ui/section-title';

export function CallToAction() {
  return (
    <div className={styles.main}>
      <Image
        src='/images/hand-69b3f19568586.webp'
        className={styles.hand}
        alt='hands on Blackwell Invest'
        width={1000}
        height={1166}
        priority
      />
      <section className={styles.trading}>
        <Image
          src='/images/regular-69b3f198e3e73.webp'
          className={styles.regulated}
          alt='regulated'
          width={180}
          height={170}
        />
        <h1>Copy Trading</h1>
        <h2>
          with <span>Blackwell Invest</span>
        </h2>
        <div className={styles.buttons}>
          <button type='button' className='button-only'>
            <Image
              src='/images/google-play-69b3f191364da.webp'
              width={140}
              height={46}
              alt='Google Play'
            />
          </button>
          <button type='button' className='button-only'>
            <Image
              src='/images/app-store-69b3f19136468.webp'
              width={140}
              height={46}
              alt='App Store'
            />
          </button>
        </div>
      </section>
      <section className={styles.cta}>
        <h1>Choose & Trade</h1>
        <h2>Read-To-Go Strategies</h2>
        <p>
          Browse and copy hundreds of investment strategies developed by master
          traders! Whether you are a pro or beginner, you can now trade quicker
          and more confidently
        </p>
        <ol className={styles.tags}>
          <li className={styles.tag}>Forex</li>
          <li className={clsx(styles.tag, styles.orange)}>Precious Metals</li>
          <li className={clsx(styles.tag, styles.red)}>Oil</li>
          <li className={clsx(styles.tag, styles.secondary)}>Indices</li>
        </ol>
        <RegisterButton />
        <small>When you invest, your capital is at risk. Be prudent.</small>
      </section>
      <section className={styles.matching}>
        <SectionTitle>Fast Matching</SectionTitle>
        <p className={styles.desc}>
          Zero in on your ideal Master effortlessly. Sort by performance and
          drawdown levels or discover opportunities from new signals with our
          smart filters. Still can&apos;t decide? Simply head over to Spotlight
          for quality signals curated by us.
        </p>
        <div className={styles.features}>
          <div className={styles.video}>
            <video
              src='videos/mobile-video.mov'
              muted={true}
              autoPlay={true}
              loop={true}
              width={320}
            ></video>
          </div>
          <ul className={styles.list}>
            <li>Spotlight</li>
            <li>Top Startegies</li>
            <li>Low Drawdown</li>
            <li>Medium Drawdown</li>
            <li>High Drawdown</li>
            <li>New Startegies</li>
          </ul>
        </div>
      </section>
      <section className={styles.analysis}>
        <SectionTitle>Easy Analysis</SectionTitle>
        <p className={styles.desc}>
          Instant clarity on the Masters&apos; profile. Get a snapshot of their
          trade history, profitability, risk, and portfolio all in one place.
        </p>
        <div className={styles.function}>
          <Image
            src='/images/mobile-2-69b3f197cdfb8.webp'
            className={styles.mobile}
            width={280}
            height={560}
            alt='analysis showcase'
          />
          <Image
            src='/images/function-1-69b3f05231e5d.webp'
            className={styles.f1}
            width={260}
            height={180}
            alt='function-1'
          />
          <Image
            src='/images/function-2-69b3f0514171b.webp'
            className={styles.f2}
            width={260}
            height={140}
            alt='function-2'
          />
          <Image
            src='/images/function-3-69b3f052953f0.webp'
            className={styles.f3}
            width={260}
            height={140}
            alt='function-3'
          />
          <Image
            src='/images/function-4-69b3f053a307e.webp'
            className={styles.f4}
            width={260}
            height={200}
            alt='function-4'
          />
          <Image
            src='/images/function-5-69b3f053ab34d.webp'
            className={styles.f5}
            width={260}
            height={160}
            alt='function-5'
          />
        </div>
      </section>
    </div>
  );
}
