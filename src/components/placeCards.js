import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  box-shadow: 2px 2px 3px 3px darkgray;
  border-radius: 10px;
  grid-template-rows: 110px auto;
  margin: 0.5rem;
  max-width: 300px;
  padding: 0.5rem;
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  div {
    margin: 0 0 0 0.5rem;
    align-self: end;
  }
  h4 {
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

const PlaceCards = ({ assets }) => (
  <>
    {assets.map(
      ({ Asset_Type: AssetType, Name, City, Zip_, Notes, Address, Unit_ }) => (
        <Card key={Name}>
          <h3>{Name}</h3>
          <ul>
            <hr />
            <li>Type: {AssetType}</li>
            <li>{Notes}</li>
          </ul>
          <div>
            <h4>Location:</h4>
            {Address && <p>{Address},</p>}
            {Unit_ && <p>Unit {Unit_}</p>}
            <p>
              {City}, {Zip_}
            </p>
          </div>
        </Card>
      )
    )}
  </>
);

PlaceCards.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlaceCards;
