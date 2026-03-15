import Image from 'next/image';
import { RegisterButton } from './ui/register-button';
import styles from './call-to-action.module.scss';
import clsx from 'clsx';
import { SectionTitle } from './ui/section-title';
import * as motion from 'motion/react-client';

export function CallToAction() {
  const features = [
    'Spotlight',
    'Top Startegies',
    'Low Drawdown',
    'Medium Drawdown',
    'High Drawdown',
    'New Startegies',
  ];

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.hand}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src='/images/hand-69b3f19568586.webp'
          alt='hands on Blackwell Invest'
          width={1000}
          height={1166}
          priority
        />
      </motion.div>
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
          <motion.ul
            className={styles.list}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delayChildren: 0.2,
                },
              },
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature) => (
              <motion.li
                key={feature}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: 'tween' },
                  },
                }}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>
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
          <motion.div
            className={styles.f1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/function-1-69b3f05231e5d.webp'
              width={260}
              height={180}
              alt='function-1'
            />
          </motion.div>
          <motion.div
            className={styles.f2}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/function-2-69b3f0514171b.webp'
              width={260}
              height={140}
              alt='function-2'
            />
          </motion.div>
          <motion.div
            className={styles.f3}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/function-3-69b3f052953f0.webp'
              width={260}
              height={140}
              alt='function-3'
            />
          </motion.div>
          <motion.div
            className={styles.f4}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/function-4-69b3f053a307e.webp'
              width={260}
              height={200}
              alt='function-4'
            />
          </motion.div>
          <motion.div
            className={styles.f5}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/function-5-69b3f053ab34d.webp'
              width={260}
              height={160}
              alt='function-5'
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
