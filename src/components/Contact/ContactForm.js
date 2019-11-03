import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const ContactForm = () => {
  return (
    <section>
      <Title title="contact" subtitle="me" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/nikokeefe3@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="input"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Larry Crump"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="larry@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="tell me a little something..."
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
