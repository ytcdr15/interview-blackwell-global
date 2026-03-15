'use client';

import Image from 'next/image';
import styles from './guide.module.scss';
import clsx from 'clsx';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import { SectionTitle } from './ui/section-title';
import {
  motion,
  AnimatePresence,
  easeOut,
  TargetAndTransition,
  Transition,
} from 'motion/react';

export function Guide() {
  const initial: TargetAndTransition = { opacity: 0, y: -24 };
  const animate: TargetAndTransition = { opacity: 1, y: 0 };
  const exit: TargetAndTransition = { opacity: 0, y: -24 };
  const transition: Transition = { duration: 0.2, ease: easeOut };

  return (
    <section className={clsx(styles.section, 'full-width')}>
      <div className={styles.content}>
        <SectionTitle>Trade Like a Pro in Minutes</SectionTitle>
        <div className={styles.accordion}>
          <Disclosure as='div' className={styles.disclosure}>
            {({ open }) => (
              <div className={styles.border}>
                <DisclosureButton
                  className={clsx(styles.disbutton, 'button-only')}
                >
                  <span className={styles.marker}>1</span>
                  <span className={styles.text}>
                    Install our app, &quot;Blackwell Invest&quot;
                  </span>
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        style={{ transformOrigin: 'top' }}
                      >
                        <Image
                          src='/images/guide-1-69b3f0af10061.webp'
                          width={360}
                          height={400}
                          className={styles.image}
                          alt='guide-1'
                        />
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            {({ open }) => (
              <div className={styles.border}>
                <DisclosureButton
                  className={clsx(styles.disbutton, 'button-only')}
                >
                  <span className={styles.marker}>2</span>
                  <span className={styles.text}>
                    Choose a signal Master and click &quot;Copy&quot;
                  </span>
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        style={{ transformOrigin: 'top' }}
                      >
                        <Image
                          src='/images/guide-2-69b3f0aeba739.webp'
                          width={360}
                          height={400}
                          className={styles.image}
                          alt='guide-2'
                        />
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            {({ open }) => (
              <div className={styles.border}>
                <DisclosureButton
                  className={clsx(styles.disbutton, 'button-only')}
                >
                  <span className={styles.marker}>3</span>
                  <span className={styles.text}>
                    Set your trade size preferences
                  </span>
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        style={{ transformOrigin: 'top' }}
                      >
                        <Image
                          src='/images/guide-3-69b3f0b056db7.webp'
                          width={360}
                          height={400}
                          className={styles.image}
                          alt='guide-3'
                        />
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            {({ open }) => (
              <div className={styles.border}>
                <DisclosureButton
                  className={clsx(styles.disbutton, 'button-only')}
                >
                  <span className={styles.marker}>4</span>
                  <span className={styles.text}>
                    Click &quot;Agree and Copy&quot;
                  </span>
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        style={{ transformOrigin: 'top' }}
                      >
                        <Image
                          src='/images/guide-4-69b3f0b09c3b5.webp'
                          width={360}
                          height={400}
                          className={styles.image}
                          alt='guide-4'
                        />
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
        </div>
        <TabGroup className={styles.group}>
          <TabList className={styles.guide}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={clsx(styles.button, 'button-only', {
                    [styles.selected]: selected,
                  })}
                >
                  <span className={styles.marker}>1</span>
                  <span className={styles.text}>
                    Install our app, &quot;Blackwell Invest&quot;
                  </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={clsx(styles.button, 'button-only', {
                    [styles.selected]: selected,
                  })}
                >
                  <span className={styles.marker}>2</span>
                  <span className={styles.text}>
                    Choose a signal Master and click &quot;Copy&quot;
                  </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={clsx(styles.button, 'button-only', {
                    [styles.selected]: selected,
                  })}
                >
                  <span className={styles.marker}>3</span>
                  <span className={styles.text}>
                    Set your trade size preferences
                  </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={clsx(styles.button, 'button-only', {
                    [styles.selected]: selected,
                  })}
                >
                  <span className={styles.marker}>4</span>
                  <span className={styles.text}>
                    Click &quot;Agree and Copy&quot;
                  </span>
                </button>
              )}
            </Tab>
          </TabList>
          <TabPanels className={styles.panel}>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src='/images/guide-1-69b3f0af10061.webp'
                  width={500}
                  height={560}
                  alt='guide-1'
                />
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src='/images/guide-2-69b3f0aeba739.webp'
                  width={500}
                  height={560}
                  alt='guide-2'
                />
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src='/images/guide-3-69b3f0b056db7.webp'
                  width={500}
                  height={560}
                  alt='guide-3'
                />
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src='/images/guide-4-69b3f0b09c3b5.webp'
                  width={500}
                  height={560}
                  alt='guide-4'
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
      </div>
    </section>
  );
}
