import clsx from 'clsx';
import styles from './enquiry-form.module.scss';
import { SectionTitle } from './ui/section-title';

export function EnquiryForm() {
  return (
    <section className={clsx(styles.section, 'full-width')}>
      <form action='#enquiry' method='post' className={styles.form}>
        <SectionTitle className={styles.span}>Enquire Now</SectionTitle>
        <label className={styles.label}>
          <input
            type='text'
            name='name'
            className={clsx('input', styles.input)}
            placeholder='Name'
            required
          />
        </label>
        <label className={styles.label}>
          <input
            type='email'
            name='email'
            className={clsx('input', styles.input)}
            placeholder='Email'
            required
          />
        </label>
        <label className={styles.label}>
          <input
            type='tel'
            name='mobile-no'
            className={clsx('input', styles.input)}
            placeholder='Mobile No.'
            required
          />
        </label>
        <label className={styles.label}>
          <select
            name='country-residence'
            defaultValue=''
            className={clsx('input', styles.input)}
          >
            <option value='' disabled>
              Country of Residence
            </option>
            <option value='malaysia'>Malaysia</option>
            <option value='vietnam'>Vietnam</option>
            <option value='thailand'>Thailand</option>
            <option value='others'>Others</option>
          </select>
        </label>
        <label className={clsx(styles.label, styles.span)}>
          <textarea
            name='message'
            rows={8}
            className={clsx('input', styles.input)}
            placeholder='Enter your message here'
          ></textarea>
        </label>
        <button
          type='submit'
          className={clsx(styles.submit, styles.span, 'button')}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
