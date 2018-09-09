import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tour from '../Tour';
import { BREAKPOINTS } from '../../helpers/constants';

const TourList = styled.section`
  display: grid;
  grid-gap: 10px;
  @media(min-width: ${BREAKPOINTS.medMin}px) and (max-width: ${BREAKPOINTS.medMax}px) {
      grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${BREAKPOINTS.medMin}px) and (max-width: ${BREAKPOINTS.medMax}px) and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    & > article {
      margin: 5px;
      width: calc( 50% - 12px);
      flex: 0 0 calc( 50% - 12px);
    }
  }
  @media(min-width: ${BREAKPOINTS.lgMin}px) {
    grid-gap: 28px;
  }
`;

class ResultsList extends Component {
  render() {
    const { results } = this.props;
    if (results === null) return null;
    return (
      <TourList>
        {results.map(result => {
          return <Tour key={result.id} tour={result} />;
        })}
      </TourList>
    )
  }
}

ResultsList.propTypes = {
  results: PropTypes.array,
};

export default ResultsList;
