import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFilter = styled.aside`
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  input {
    margin-right: 0.2rem;
  }
`;
const Checkbox = ({ value }) => (
  <label>
    <input type="checkbox" value={value} />
    {value}
  </label>
);
Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
};

const Filter = () => {
  return (
    <StyledFilter>
      <h4>Filter Innovations</h4>
      <hr />
      <Checkbox value="All" />
      <Checkbox value="Public Places" />
      <Checkbox value="Education" />
      <Checkbox value="Healthcare & Social Services" />
      <Checkbox value="arts" />
      <Checkbox value="tech" />
      <Checkbox value="IRL Social Networking Places" />
      <Checkbox value="Innovation Cultivators" />
    </StyledFilter>
  );
};

export default Filter;
