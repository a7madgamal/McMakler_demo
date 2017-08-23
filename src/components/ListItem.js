import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  printPurpose(purpose) {
    return purpose === 0 ? 'Mieten' : 'Kaufen'
  }
  
  getImage(advertisementAssets) {
    for (let key in advertisementAssets) {
      if (advertisementAssets[key].titlePicture) {
        return advertisementAssets[key].advertisementThumbnails.inventory_m.url;
      }
    }
  }
  render() {
    return (
      <li className="list-item">
        <img src={this.getImage(this.props.item.advertisementAssets)} alt="" />
        <span className="list-item-type">{this.printPurpose(this.props.item.purpose)}</span>
        <div className="list-item-info-container">
          <h3 className="list-item-title">
            {this.props.item.title}
          </h3>
          <span className="list-item-address">
            {this.props.item.realestateSummary.address.postalCode}{' '}
            {this.props.item.realestateSummary.address.city}
          </span>

          <div className="list-info-container">
            <span className="list-item-price">
              {this.props.item.advertisementPrice.baseRent} &euro;
            </span>
            
            <span className="list-item-area">
              ab {(this.props.item.realestateSummary.space*1).toFixed(2)} m2
            </span>

            <span className="list-item-rooms">
              {this.props.item.realestateSummary.numberOfRooms} Zimmer
            </span>
          </div>
        </div>
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
