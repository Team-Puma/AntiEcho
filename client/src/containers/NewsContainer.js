import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsFeedItem from '../components/NewsFeedItem';
import FavoritesItem from '../components/FavoritesItem';
import * as actions from '../actions/actions';


const mapStateToProps = state => ({
  main: state.main,
  favorites: state.user.favorites,
});

const mapDispatchToProps = actions;

class NewsContainer extends Component {
  render() {
    // console.log('this.props.main.feedList is: ', this.props.main.feedList)
    const newsFeedItemArr = this.props.main.feedList.map((article, i) => {
      // console.log('NewsFeedItemzzz', article);
      return (<NewsFeedItem
        key={i}
        id={article._id}
        author={article.author}
        source={article.source.name}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        email={this.props.email}
        handleClick={this.props.handleClick}
      />);
    });

    const favoritesArr = this.props.favorites.map((article, i) => {
      return (<FavoritesItem
        key={i}
        id={article._id}
        author={article.author}
        source={article.source.name}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
      />);
    });

    return (
      <div id="newsContainer">
        {favoritesArr}
        {newsFeedItemArr}
      </div>
    );
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
