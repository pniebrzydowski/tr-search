import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TourInfo extends Component {
  render() {
    const { 
      tour_name, description, destinations, age_from, age_to,
      country, tour_operator, currency, saving, price, length,
      tour_image, map_image } = this.props.tour;
    return (
      <article>
        <div className="tour-photos">
          <img src={tour_image} alt="photo" />
          <img src={map_image} alt="map" />
        </div>
        <div className="tour-info">
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
        <div className="tour-sidebar">
          <div className="price-info">
            <div className="price-savings">
              <label>Our saving</label>
              <span>{currency} {saving}</span>
            </div>
            <div className="price-listing">
              <label>From</label>
              <span>{currency} {price}</span>
            </div>
          </div>
          <div className="duration">
            { length } days
          </div>
        </div>
      </article>
    );
  }
}

TourInfo.propTypes = {
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

export default TourInfo;
