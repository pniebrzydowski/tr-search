import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TourSidebar extends Component {
  render() {
    const { currency, saving, price, length } = this.props;
    return (
      <div className="tour-sidebar">
        <div className="price-info">
          <div className="price-savings">
            <label>Our saving</label>
            <span>{currency} {saving}</span>
          </div>
          <div className="price-listing">
            <label>From</label>
            <span>{currency} {price}</span>
          </div>
        </div>
        <div className="duration">
          { length } days
        </div>
      </div>
    );
  }
}

TourSidebar.propTypes = {
  length: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  saving: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TourSidebar;
