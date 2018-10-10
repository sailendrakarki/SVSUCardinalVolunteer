import React from 'react';
import PropTypes from 'prop-types';
//import Header from './header';

const App = ({ children }) => (
 
  <div className="jumbotron">
    <div className="container">
    
        <div className="col-sm-8 col-sm-offset-2">
          {children}
        </div>
    
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default App;
