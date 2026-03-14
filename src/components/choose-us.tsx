import Image from 'next/image';
import styles from './choose-us.module.scss';
import clsx from 'clsx';
import { RegisterButton } from './register-button';

export function ChooseUs() {
  return (
    <section className={clsx(styles.section, 'full-width')}>
      <div className={styles.content}>
        <h1>Why Choose Us?</h1>
        <ul className={styles.reason}>
          <li>
            <Image
              src='/images/icon-1-69b3f0945fa2e.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-1'
            />
            <h2>Regulated</h2>
            <p>
              The copy trading platform is regulated. Our technology partner is
              regulated. And so are we, as a brokerage. We operate under strict
              compliance because your trust and peace of mind are everything.
            </p>
          </li>
          <li>
            <Image
              src='/images/icon-2-69b3f0945cfb9.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-2'
            />
            <h2>0 Commissions</h2>
            <p>
              When investing, the small margins matter. Blackwell Invest offers
              0 commissions investing, and 0 cost to install our app.
            </p>
          </li>
          <li>
            <Image
              src='/images/icon-3-69b3f093ceda3.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-3'
            />
            <h2>User-friendly</h2>
            <p>
              With an intuitive interface, easy trade execution, and hassle-free
              management, copying top traders has never been simpler. Trade
              smarter, not harder!
            </p>
          </li>
          <li>
            <Image
              src='/images/icon-4-69b3f093ced52.webp'
              className={styles.icon}
              width={84}
              height={84}
              alt='icon-4'
            />
            <h2>Tier 1 liquidity</h2>
            <p>
              Blackwell Invest sources the best liquidity to provide a deep
              product range and broad market access. Fast order execution and
              transparent pricing.
            </p>
          </li>
        </ul>
        <RegisterButton />
      </div>
    </section>
  );
}
