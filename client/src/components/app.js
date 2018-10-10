import React from 'react';
import PropTypes from 'prop-types';
//import Header from './header';

const App = ({ children }) => (
 
    <div className="container">
    
          {children}
    
    </div>
 
);

App.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default App;
