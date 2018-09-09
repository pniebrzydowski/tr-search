import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tour from '../Tour';

const TourList = styled.section`
  display: grid;
  grid-gap: 10px;
  @media(min-width: 568px) and (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 768px) {
    grid-gap: 28px;
  }
`;

const LoadingMessage = styled.div`
  background-image: url(/images/tr-loader-small.gif);
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

class ResultsList extends Component {
  render() {
    const { results } = this.props;
    if (results === null) {
      return <LoadingMessage />
    };
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
