import data from '../user-feed.json';
import React from 'react';
import {Video} from './Video';


class Main extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: data.itemList
    })
  }

  render() {
    return (
      <Video />
    );
  }
}

export {Main};
