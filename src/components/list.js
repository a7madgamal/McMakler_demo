import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState(nextProps);
  // }

  render() {
    return (
      <ul className="list">
        {this.state.items.map(item => <ListItem item={item}/>)}
      </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
