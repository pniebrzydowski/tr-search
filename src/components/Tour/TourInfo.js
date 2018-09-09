import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 20px;

  h1 {
    margin-top: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }
  table {
    margin-top: 12px;
  }
  th, td {
    font-size: 10px;
    text-align: left;
  }
  th {
    font-weight: normal;
    text-transform: uppercase;
    color: #818d99;
    width: 100px; 
  }
`;

class TourInfo extends Component {
  render() {
    const { tour_name, description, destinations, age_from, age_to, country, tour_operator } = this.props;
    return (
      <InfoContainer>
        <h1>{ tour_name }</h1>
        <p>{ description }</p>
        <table>
          <tbody>
            <tr>
              <th>Destinations</th>
              <td>{ destinations.map((destination, idx) => {
                const disp = (idx > 0 ? ', ' : '') + destination ;
                return disp;
              })}</td>
            </tr>
            <tr>
              <th>Starts/Ends in</th>
              <td>{ destinations[0] + ' / ' + destinations[destinations.length - 1] }</td>
            </tr>
            <tr>
              <th>Age Range</th>
              <td>{ age_from + ' to ' + age_to + ' year olds' }</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{ country }</td>
            </tr>
            <tr>
              <th>Operator</th>
              <td>{ tour_operator }</td>
            </tr>
          </tbody>
        </table>
      </InfoContainer>
    );
  }
}

TourInfo.propTypes = {
  tour_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destinations: PropTypes.arrayOf(PropTypes.string),
  age_from: PropTypes.number.isRequired,
  age_to: PropTypes.number.isRequired,
  tour_operator: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default TourInfo;
