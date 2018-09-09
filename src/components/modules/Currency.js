import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CURRENCY_MAP } from '../../helpers/currency';

const CurrencyContainer = styled.div`
  span {
    font-size: 18px;
    font-weight: bold;
    display: block;
    padding: 4px 0;

    span {
      display: inline-block;
      font-size: 11px;
      font-weight: normal;
      color: #818d99;
      margin-right: 5px;
    }
  }
`;

class Currency extends PureComponent {
  render() {
    const { label, currency, amount, primary } = this.props;

    const currencySymbol = CURRENCY_MAP[currency];
    return (
      <CurrencyContainer>
        <label>{label}</label>
        <span>{primary && currencySymbol === '$' && <span>{currency.substr(0,2)}</span>}{currencySymbol} {amount}</span>
      </CurrencyContainer>
    );
  }
}

Currency.propTypes = {
  label: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  primary: PropTypes.bool,
};

Currency.defaultProps = {
  primary: false,
};

export default Currency;
