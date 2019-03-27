import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import PlaceCards from '../components/places';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to the future of Eugene's Innovation District!</p>
    <p>
      Check out our{' '}
      <a href="https://github.com/EugTech/innovate-eugene-web">Github repo</a>{' '}
      if you would like to help out!
    </p>
    <PlaceCards />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
