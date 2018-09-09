import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PhotosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media(min-width: 768px) {
    width: 232px;
    flex: 0 0 232px;
    height: 100%;  
  }

  img {
    width: 100%;
    height: auto;
  }
`;

class TourPhotos extends Component {
  render() {
    const { tour_image, map_image } = this.props;
    return (
      <PhotosContainer>
        <LazyLoadImage src={tour_image} alt="Tour" />
        <LazyLoadImage src={map_image} alt="Tour Map" />
      </PhotosContainer>
    );
  }
}

TourPhotos.propTypes = {
  tour_image: PropTypes.string.isRequired,
  map_image: PropTypes.string.isRequired,
};

export default TourPhotos;
