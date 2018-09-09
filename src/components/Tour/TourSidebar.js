import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 25%;
  flex: 0 0 25%;
  padding: 20px;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Duration = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #c7d0d9;
  text-align: center;
  font-size: 18px;
  line-height: 1;
`;

class TourSidebar extends Component {
  render() {
    const { currency, saving, price, length } = this.props;
    return (
      <SidebarContainer>
        <PriceInfo>
          <div className="price-savings">
            <label>Our saving</label>
            <span>{currency} {saving}</span>
          </div>
          <div className="price-listing">
            <label>From</label>
            <span>{currency} {price}</span>
          </div>
        </PriceInfo>
        <Duration>
          { length } days
        </Duration>
      </SidebarContainer>
    );
  }
}

TourSidebar.propTypes = {
  length: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  saving: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TourSidebar;
