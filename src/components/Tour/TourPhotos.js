import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { BREAKPOINTS } from '../../helpers/constants';

const PhotosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media(min-width: ${BREAKPOINTS.lgMin}px) {
    width: 232px;
    flex: 0 0 232px;
    height: 100%;  
  }

  img {
    width: 100%;
    height: auto;

    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

class TourPhotos extends PureComponent {
  render() {
    const { tour_image, map_image } = this.props;
    return (
      <PhotosContainer>
        <LazyLoad>
          <img src={tour_image} alt="Tour" />
        </LazyLoad>
        <LazyLoad>
          <img src={map_image} alt="Tour Map" />
        </LazyLoad>
      </PhotosContainer>
    );
  }
}

TourPhotos.propTypes = {
  tour_image: PropTypes.string.isRequired,
  map_image: PropTypes.string.isRequired,
};

export default TourPhotos;
