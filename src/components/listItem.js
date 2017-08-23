import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    return (
      <li className="list-item">
        {this.props.item.name}
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
