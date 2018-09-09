import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotosContainer = styled.div`
  width: 232px;
  flex: 0 0 232px;
  height: 100%;
  position: relative;
`;

class TourPhotos extends Component {
  render() {
    const { tour_image, map_image } = this.props;
    return (
      <PhotosContainer>
        <img src={tour_image} alt="Tour" />
        <img src={map_image} alt="Tour Map" />
      </PhotosContainer>
    );
  }
}

TourPhotos.propTypes = {
  tour_image: PropTypes.string.isRequired,
  map_image: PropTypes.string.isRequired,
};

export default TourPhotos;
