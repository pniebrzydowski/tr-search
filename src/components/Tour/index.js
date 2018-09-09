import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TourPhotos from './TourPhotos';
import TourInfo from './TourInfo';
import TourSidebar from './TourSidebar';

class Tour extends Component {
  render() {
    const { 
      tour_image, map_image,
      tour_name, description, destinations, age_from, age_to, country, tour_operator,
      currency, saving, price, length,
    } = this.props.tour;

    return (
      <article>
        <TourPhotos {...{tour_image, map_image}} />
        <TourInfo {...{tour_name, description, destinations, age_from, age_to, country, tour_operator}} />
        <TourSidebar {...{currency, saving, price, length}} />
      </article>
    );
  }
}

Tour.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tour_name: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    saving: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    destinations: PropTypes.arrayOf(PropTypes.string),
    age_from: PropTypes.number.isRequired,
    age_to: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    tour_operator: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    tour_image: PropTypes.string.isRequired,
    map_image: PropTypes.string.isRequired
  })
};

export default Tour;
