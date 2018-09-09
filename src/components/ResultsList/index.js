import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tour from '../Tour';

const TourList = styled.section`
  background-color: rgb(235, 238, 242);
  color: #2c3e50;
  padding: 20px 10px;
  font-size: 14px;
  font-family: Helvetica,Arial,FreeSans,sans-serif;
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
