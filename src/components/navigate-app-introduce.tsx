'use client';

import Image from 'next/image';
import styles from './navigate-app-introduce.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';

export function NavigateAppIntroduce() {
  return (
    <section className={styles.section}>
      <h1>Navigate Our App in 5 Clicks</h1>
      <TabGroup className={styles.group}>
        <TabList className={styles.tablist}>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type='button'
                className={clsx(styles.tab, 'button-only', {
                  [styles.selected]: selected,
                })}
              >
                {selected ? (
                  <Image
                    src='/icons/icon1-blue-69b3f10faf060.webp'
                    width={60}
                    height={60}
                    alt='icon-1-active'
                  />
                ) : (
                  <Image
                    src='/icons/icon1-69b3f10faf072.webp'
                    width={60}
                    height={60}
                    alt='icon-1'
                  />
                )}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type='button'
                className={clsx(styles.tab, 'button-only', {
                  [styles.selected]: selected,
                })}
              >
                {selected ? (
                  <Image
                    src='/icons/icon2-blue-69b3f1105689b.webp'
                    width={60}
                    height={60}
                    alt='icon-2-active'
                  />
                ) : (
                  <Image
                    src='/icons/icon2-69b3f11056831.webp'
                    width={60}
                    height={60}
                    alt='icon-2'
                  />
                )}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type='button'
                className={clsx(styles.tab, 'button-only', {
                  [styles.selected]: selected,
                })}
              >
                {selected ? (
                  <Image
                    src='/icons/icon3-blue-69b3f111231cf.webp'
                    width={60}
                    height={60}
                    alt='icon-3-active'
                  />
                ) : (
                  <Image
                    src='/icons/icon3-69b3f1112296f.webp'
                    width={60}
                    height={60}
                    alt='icon-3'
                  />
                )}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type='button'
                className={clsx(styles.tab, 'button-only', {
                  [styles.selected]: selected,
                })}
              >
                {selected ? (
                  <Image
                    src='/icons/icon4-blue-69b3f1118bd2f.webp'
                    width={60}
                    height={60}
                    alt='icon-4-active'
                  />
                ) : (
                  <Image
                    src='/icons/icon4-69b3f1118ac15.webp'
                    width={60}
                    height={60}
                    alt='icon-4'
                  />
                )}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type='button'
                className={clsx(styles.tab, 'button-only', {
                  [styles.selected]: selected,
                })}
              >
                {selected ? (
                  <Image
                    src='/icons/icon5-blue-69b3f111ed2f8.webp'
                    width={60}
                    height={60}
                    alt='icon-5-active'
                  />
                ) : (
                  <Image
                    src='/icons/icon5-69b3f111eb267.webp'
                    width={60}
                    height={60}
                    alt='icon-5'
                  />
                )}
              </button>
            )}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>Discover</h2>
              <p>
                Explore all the investment Masters available on Blackwell
                Invest. Dive into their profiles and analyse their profitability
                at a glance.
              </p>
            </div>
            <Image
              src='/images/reason-1-69b3f0ca649b0.webp'
              width={540}
              height={400}
              alt='navigate-1'
            />
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>Activity</h2>
              <p>
                See the past trades made by the signals you are copying from the
                last 30 days or track their open positions. Monitor their
                strategy, and make informed decisions with timely updates of the
                trades shaping your portfolio.
              </p>
            </div>
            <Image
              src='/images/reason-2-69b3f0ca686c5.webp'
              width={540}
              height={400}
              alt='navigate-2'
            />
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>Trade</h2>
              <p>
                Seamlessly trade oil CFDs, indices, and currency pairs with
                ease.{' '}
              </p>
            </div>
            <Image
              src='/images/reason-3-69b3f0cb8770f.webp'
              width={600}
              height={400}
              alt='navigate-3'
            />
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>Positions</h2>
              <p>
                Easily track the status of all your trades and monitor your
                account metrics in real-time.{' '}
              </p>
            </div>
            <Image
              src='/images/reason-4-69b3f0cba4bc6.webp'
              width={600}
              height={400}
              alt='navigate-4'
            />
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>Account</h2>
              <p>
                Access detailed information about your trading account, monitor
                copier drawdown levels, assess your profitability, and keep
                track of your trade performance - all in one place!
              </p>
            </div>
            <Image
              src='/images/reason-5-69b3f0ccba411.webp'
              width={600}
              height={400}
              alt='navigate-5'
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
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
  );
}
