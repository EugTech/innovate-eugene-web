import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PlaceCards from './placeCards';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
`;

const Places = () => {
  const data = useStaticQuery(graphql`
    {
      allJson {
        edges {
          node {
            Assets {
              Asset_Type
              Name
              City
              Zip_
              Notes
              Address
              Unit_
            }
          }
        }
      }
    }
  `).allJson.edges[0].node.Assets;
  const PublicPlaces = data.filter(item => item.Asset_Type === 'Public Places');
  const EducationPlaces = data.filter(item => item.Asset_Type === 'Education');
  const HealthcarePlaces = data.filter(
    item => item.Asset_Type === 'Healthcare & Social Services'
  );
  const ArtsPlaces = data.filter(item => item.Asset_Type === 'arts');
  const TechPlaces = data.filter(item => item.Asset_Type === 'tech');
  const IRLPlaces = data.filter(
    item => item.Asset_Type === 'IRL Social Networking Places'
  );
  const InnovationCultivators = data.filter(
    item => item.Asset_Type === 'Innovation Cultivators'
  );
  return (
    <StyledSection>
      {/* TODO: Add filter context */}
      <PlaceCards assets={PublicPlaces} />
      <PlaceCards assets={EducationPlaces} />
      <PlaceCards assets={HealthcarePlaces} />
      <PlaceCards assets={ArtsPlaces} />
      <PlaceCards assets={TechPlaces} />
      <PlaceCards assets={IRLPlaces} />
      <PlaceCards assets={InnovationCultivators} />
    </StyledSection>
  );
};

export default Places;
