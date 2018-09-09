import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Currency from '../modules/Currency';

const SidebarContainer = styled.div`
  width: 25%;
  flex: 0 0 25%;
  padding: 20px;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;

  & > :first-child {
    text-align: left;
  }
  & > :last-child {
    text-align: right;
  }
`;

const Duration = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #c7d0d9;
  border-bottom: 1px solid #c7d0d9;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`;

class TourSidebar extends Component {
  render() {
    const { currency, saving, price, length } = this.props;
    return (
      <SidebarContainer>
        <PriceInfo>
          <Currency label="Our saving" currency={currency} amount={saving} />
          <Currency label="From" currency={currency} amount={price} />
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
