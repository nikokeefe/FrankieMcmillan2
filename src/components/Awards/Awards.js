import React from 'react';
import Award from '../Awards/Award';

import styles from '../../css/award.module.css';

const Awards = ({ award }) => {
	return (
		<div>
			<ul>
				<li className={styles.listItem}>
					<Award award={award} />
				</li>
			</ul>
		</div>
	);
};

export default Awards;
