'use client';

import Image from 'next/image';
import styles from './navigate-app-introduce.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';
import { SectionTitle } from './ui/section-title';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export function NavigateAppIntroduce() {
  const t = useTranslations('navigate-app');

  return (
    <section className={styles.section}>
      <SectionTitle>{t('title')}</SectionTitle>
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
              <h2>{t('s1')}</h2>
              <p>{t('d1')}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src='/images/reason-1-69b3f0ca649b0.webp'
                width={540}
                height={400}
                alt='navigate-1'
              />
            </motion.div>
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>{t('s2')}</h2>
              <p>{t('d2')}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src='/images/reason-2-69b3f0ca686c5.webp'
                width={540}
                height={400}
                alt='navigate-2'
              />
            </motion.div>
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>{t('s3')}</h2>
              <p>{t('d3')}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src='/images/reason-3-69b3f0cb8770f.webp'
                width={600}
                height={400}
                alt='navigate-3'
              />
            </motion.div>
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>{t('s4')}</h2>
              <p>{t('d4')}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src='/images/reason-4-69b3f0cba4bc6.webp'
                width={600}
                height={400}
                alt='navigate-4'
              />
            </motion.div>
          </TabPanel>
          <TabPanel className={styles.panel}>
            <div className={styles.desc}>
              <h2>{t('s5')}</h2>
              <p>{t('d5')}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src='/images/reason-5-69b3f0ccba411.webp'
                width={600}
                height={400}
                alt='navigate-5'
              />
            </motion.div>
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
