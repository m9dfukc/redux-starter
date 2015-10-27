import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';

import Item from './Item';

export default class ItemList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) =>
          <Item {...item}
                key={index} />
        )}
      </ul>
    )
  }
}

// Throws an warning right now ... but should work - no?! https://github.com/HurricaneJames/react-immutable-proptypes
ItemList.propTypes = {
  items: ImmutablePropTypes.listOf(ImmutablePropTypes.contains(
    Immutable.Map({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired).isRequired
};
