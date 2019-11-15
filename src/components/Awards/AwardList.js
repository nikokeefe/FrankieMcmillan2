import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Awards from './Awards';
import Title from '../Title';

import styles from '../../css/award.module.css';

const getAwards = graphql`
	query {
		awards: allContentfulAwards {
			edges {
				node {
					id
					awardTitle
					winningTitle
					date(formatString: "YYYY")
					url
				}
			}
		}
	}
`;

const AwardList = () => {
	const { awards } = useStaticQuery(getAwards);

	return (
		<section className={styles.awards}>
			<Title title='Literary' subtitle='Awards' />
			<div className={styles.center}>
				{awards.edges.map(({ node }) => {
					return <Awards key={node.id} award={node} />;
				})}
			</div>
		</section>
	);
};

export default AwardList;
