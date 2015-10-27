import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import InputItem from '../components/InputItem';
import ItemList from '../components/ItemList';
import Counter from '../components/Counter';

class App extends Component {
  render() {
    const { counter, items } = this.props;
    return (
      <div>
        <Counter
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onReset={this.reset}
          state={counter} />
        <ItemList
          items={items} />
        <InputItem
          onAdd={this.addItem} />
      </div>
    )
  }
  increment = (evt) => {
    evt.preventDefault();
    this.props.dispatch(Actions.increment());
  }
  decrement = (evt) => {
    evt.preventDefault();
    this.props.dispatch(Actions.decrement());
  }
  reset = (evt) => {
    evt.preventDefault();
    this.props.dispatch(Actions.reset());
  }
  addItem = (text) => {
    this.props.dispatch(Actions.addItem(text));
  }
}

export default connect(state => {
  return {
    counter: state.get('counter'),
    items: state.get('items')
  };
})(App);
