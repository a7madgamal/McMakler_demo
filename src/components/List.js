import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../style/ListItem.css';

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
      <div className="row">
        <ul className="list ">
          {this.state.items.map(item => <ListItem item={item} key={item._id.$id} />)}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
