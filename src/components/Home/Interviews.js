import React from 'react';

import Title from '../Title';

import styles from '../../css/interviews.module.css';
import interviews from '../../constants/interviews';

const Interviews = () => {
  return (
    <section className={styles.interviews}>
      <Title title="Radio" subtitle="Interviews" />
      <div className={styles.center}>
        {interviews.map((item, index) => {
          return (
            <article key={index} className={styles.interview}>
              <a
                href={item.url}
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.icon}</span>
                <h4>{item.title}</h4>

                {item.text}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Interviews;
