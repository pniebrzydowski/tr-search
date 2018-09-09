import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 1px solid #c7d0d9;
  height: 43px;
  line-height: 41px;
  padding: 0 30px 0 15px;
  background-color: white;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9.5' height='5' viewBox='0 0 19 10'%3E%3Cpath fill='%23999' d='M17.7.2c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-8.6 8.5c-.3.3-.8.3-1.1 0L.5 1.3C.2 1 .2.5.5.2c.3-.3.8-.3 1.1 0L9.7 8l8-7.8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position-x: 92%;
  background-position-y: center;
  max-width: 150px;
  appearance: none;
`;

class SelectInput extends PureComponent {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  change(evt) {
    const { options, onChange } = this.props;
    onChange( options[evt.target.value].value );
  }

  render() {
    const { options, ...others } = this.props;
    return (
      <StyledSelect {...others} onChange={this.change}>
        {options.map((opt, idx) => {
          return <option key={idx} value={idx}>{opt.label}</option>;
        })}
      </StyledSelect>
    )
  }
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
