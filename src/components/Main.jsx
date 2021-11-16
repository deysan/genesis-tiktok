import data from '../user-feed.json';
import React from 'react';
import {Carousel} from './Carousel';
import {Card} from './Card';

const CARDS = 10;

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
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
        ))}
      </Carousel>
    );
  }
}

export {Main};
