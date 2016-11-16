import React, { PropTypes } from 'react';
import Toolbar from 'components/Toolbar';
import './style.scss';

const App = (props) => (
  <main className="viewport">
    {props.children}
    <Toolbar />
  </main>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
