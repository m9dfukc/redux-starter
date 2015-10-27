import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string.isRequired
};
