import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NewsFeedItem = props => {
  let buttonClass = 'hidden';
  if (props.email !== '') buttonClass = 'visible';

  return (
    <div id="card">
      <Card style={{
        width: '100%'
      }}>
        <a href={props.url}>
          <CardHeader
            title={props.title}
            subtitle={props.source}
            titleStyle={{
              fontSize: '18px',
            }}
            textStyle={{paddingRight: '0px'}}
          />
          <CardMedia>
            <img src={props.urlToImage} alt="" />
          </CardMedia>
          <CardTitle
            // title={props.source} subtitle={props.author}
          />
          <CardText>
            {props.description}
          </CardText>
        </a>
      </Card>
      <div className={buttonClass}>
        <FlatButton onClick={props.handleClick}>
            Add to Favorites
        </FlatButton>
      </div>
    </div>
  );
};

// export default NewsFeedItem;

module.exports = NewsFeedItem;

// {/* <NewsFeedItem
//   key={i}
//   id={article._id}
//   author={article.author}
//   title={article.title}
//   description={article.description}
//   url={article.url}
//   urlToImage={article.urlToImage}
// /> */}
