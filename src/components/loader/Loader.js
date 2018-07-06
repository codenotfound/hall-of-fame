import React from 'react';
import ReactLoader from 'react-loaders';

const Loader = () => (
    <div className="d-flex justify-content-center">
      <ReactLoader type="ball-grid-pulse" className="loader-center"/>
    </div>
);

export default Loader;
