import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CurrencyContainer = styled.div`
  span {
    font-size: 18px;
    font-weight: bold;
    display: block;
    padding: 4px 0;
  }
`;

class Currency extends PureComponent {
  render() {
    const { label, currency, amount } = this.props;
    return (
      <CurrencyContainer>
        <label>{label}</label>
        <span>{currency} {amount}</span>
      </CurrencyContainer>
    );
  }
}

Currency.propTypes = {
  label: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Currency;
