import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Counter extends Component {
  render() {
    const { state } = this.props;
    return (
      <div>
        <span>Counter value: {state.get('value')}</span>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    )
  }
}

// Throws an warning right now ... but should work - no?! https://github.com/HurricaneJames/react-immutable-proptypes
Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  state: ImmutablePropTypes.mapOf(ImmutablePropTypes.contains(
    React.PropTypes.number.isRequired
  )).isRequired
};
