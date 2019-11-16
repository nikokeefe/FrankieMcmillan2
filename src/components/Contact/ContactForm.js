import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const ContactForm = () => {
	return (
		<section>
			<Title title='contact' subtitle='me' />
			<div className={styles.center}>
				<div className={styles.section}>
					<form
						method='post'
						name='contact'
						action='/thanks'
						data-netlify='true'
						netlify-honeypot='bot'
						className={styles.form}
					>
						<input type='hidden' name='form-name' value='contact' />
						<div className={styles.hidden}>
							<label>Don't fill this out, human</label>
							<input name='bot' />
						</div>

						<div className={styles.field}>
							<label htmlFor='name'>Name</label>
							<input
								type='input'
								name='name'
								id='name'
								className={styles.formControl}
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								className={styles.formControl}
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor='message'>Message</label>
							<textarea
								name='message'
								id='message'
								rows='10'
								className={styles.formControl}
							/>
						</div>
						<div className={styles.field}>
							<input type='submit' value='submit' className={styles.submit} />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
