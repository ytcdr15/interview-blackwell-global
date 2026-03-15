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

export function Guide() {
  return (
    <section className={clsx(styles.section, 'full-width')}>
      <div className={styles.content}>
        <SectionTitle>Trade Like a Pro in Minutes</SectionTitle>
        <div className={styles.accordion}>
          <Disclosure as='div' className={styles.disclosure}>
            <div className={styles.border}>
              <DisclosureButton
                className={clsx(styles.disbutton, 'button-only')}
              >
                <span className={styles.marker}>1</span>
                <span className={styles.text}>
                  Install our app, &quot;Blackwell Invest&quot;
                </span>
              </DisclosureButton>
              <DisclosurePanel>
                <Image
                  src='/images/guide-1-69b3f0af10061.webp'
                  width={360}
                  height={400}
                  className={styles.image}
                  alt='guide-1'
                />
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            <div className={styles.border}>
              <DisclosureButton
                className={clsx(styles.disbutton, 'button-only')}
              >
                <span className={styles.marker}>2</span>
                <span className={styles.text}>
                  Choose a signal Master and click &quot;Copy&quot;
                </span>
              </DisclosureButton>
              <DisclosurePanel>
                <Image
                  src='/images/guide-2-69b3f0aeba739.webp'
                  width={360}
                  height={400}
                  className={styles.image}
                  alt='guide-2'
                />
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            <div className={styles.border}>
              <DisclosureButton
                className={clsx(styles.disbutton, 'button-only')}
              >
                <span className={styles.marker}>3</span>
                <span className={styles.text}>
                  Set your trade size preferences
                </span>
              </DisclosureButton>
              <DisclosurePanel>
                <Image
                  src='/images/guide-3-69b3f0b056db7.webp'
                  width={360}
                  height={400}
                  className={styles.image}
                  alt='guide-3'
                />
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as='div' className={styles.disclosure}>
            <div className={styles.border}>
              <DisclosureButton
                className={clsx(styles.disbutton, 'button-only')}
              >
                <span className={styles.marker}>4</span>
                <span className={styles.text}>
                  Click &quot;Agree and Copy&quot;
                </span>
              </DisclosureButton>
              <DisclosurePanel>
                <Image
                  src='/images/guide-4-69b3f0b09c3b5.webp'
                  width={360}
                  height={400}
                  className={styles.image}
                  alt='guide-4'
                />
              </DisclosurePanel>
            </div>
          </Disclosure>
        </div>
        <div className=''>
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
                <Image
                  src='/images/guide-1-69b3f0af10061.webp'
                  width={500}
                  height={560}
                  alt='guide-1'
                />
              </TabPanel>
              <TabPanel>
                <Image
                  src='/images/guide-2-69b3f0aeba739.webp'
                  width={500}
                  height={560}
                  alt='guide-2'
                />
              </TabPanel>
              <TabPanel>
                <Image
                  src='/images/guide-3-69b3f0b056db7.webp'
                  width={500}
                  height={560}
                  alt='guide-3'
                />
              </TabPanel>
              <TabPanel>
                <Image
                  src='/images/guide-4-69b3f0b09c3b5.webp'
                  width={500}
                  height={560}
                  alt='guide-4'
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
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
