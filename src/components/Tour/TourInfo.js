import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TourInfo extends Component {
  render() {
    const { tour_name, description, destinations, age_from, age_to, country, tour_operator } = this.props;
    return (
      <div>
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
      </div>
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
