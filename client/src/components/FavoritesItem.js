// import React from 'react';

// const FavoritesItem = props => {
//   return (
//     <div className="favoritesItem">
//       <a href={props.url}>
//         This is a tile
//       </a>
//     </div>
//   )


// }


import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const FavoritesItem = props => {
  let buttonClass = 'hidden';
  if (props.email !== '') buttonClass = 'visible';

  return (
    <div className="favorite">
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
    </div>
  );
};



module.exports = FavoritesItem;
