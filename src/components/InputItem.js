import React, { Component, PropTypes } from 'react';

export default class InputItem extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button type="submit" onClick={e => this.handleClick(e)}>
          Submit
        </button>
      </div>
    )
  }
  handleClick(evt) {
    const node = this.refs.input;
    const text = node.value.trim();
    evt.preventDefault();
    this.props.onAdd(text);
    node.value = '';
  }
}

InputItem.propTypes = {
  onAdd: PropTypes.func.isRequired
};
