import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TourPhotos extends Component {
  render() {
    const { tour_image, map_image } = this.props;
    return (
      <div className="tour-photos">
        <img src={tour_image} alt="Tour" />
        <img src={map_image} alt="Tour Map" />
      </div>
    );
  }
}

TourPhotos.propTypes = {
  tour_image: PropTypes.string.isRequired,
  map_image: PropTypes.string.isRequired,
};

export default TourPhotos;
