import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TourPhotos from './TourPhotos';
import TourInfo from './TourInfo';
import TourSidebar from './TourSidebar';

const TourItem = styled.article`
  min-height: 246px;
  padding: 1px 1px 17px;
  background: #fff;
  position: relative;

  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;  
  }
`;

class Tour extends Component {
  render() {
    const { 
      tour_image, map_image,
      tour_name, description, destinations, age_from, age_to, country, tour_operator,
      currency, saving, price, length,
    } = this.props.tour;

    return (
      <TourItem>
        <TourPhotos {...{tour_image, map_image}} />
        <TourInfo {...{tour_name, description, destinations, age_from, age_to, country, tour_operator}} />
        <TourSidebar {...{currency, saving, price, length}} />
      </TourItem>
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
