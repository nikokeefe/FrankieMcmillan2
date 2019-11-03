import React, { Component } from 'react';

import Book from './Book';
import Title from '../Title';
import styles from '../../css/items.module.css';

export default class BookList extends Component {
  state = {
    books: [],
    sortedBooks: [],
  };

  componentDidMount() {
    this.setState({
      books: this.props.books.edges,
      sortedBooks: this.props.books.edges,
    });
  }

  render() {
    return (
      <section className={styles.books}>
        <Title title="all" subtitle="books" />
        <div className={styles.center}>
          {this.state.sortedBooks.map(({ node }) => {
            return <Book key={node.contentful_id} book={node} />;
          })}
        </div>
      </section>
    );
  }
}
