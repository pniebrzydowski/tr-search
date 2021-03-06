import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CURRENCY_MAP } from '../../helpers/currency';
import { COLORS } from '../../helpers/constants';

const CurrencyContainer = styled.div`
  span {
    font-size: 18px;
    font-weight: ${props => props.primary ? 'bold' : 'normal'};
    display: block;
    padding: 4px 0;

    span {
      display: inline-block;
      font-size: 11px;
      font-weight: normal;
      color: ${COLORS.secondary};
      margin-right: 5px;
    }
  }
`;

class Currency extends PureComponent {
  render() {
    const { label, currency, amount, primary } = this.props;

    const currencySymbol = CURRENCY_MAP[currency];
    return (
      <CurrencyContainer primary={primary}>
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
