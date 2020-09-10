import React from 'react';
import Cake from './containers/Cake';
import Icecream from './containers/Icecream';
import NewCake from './containers/NewCake';

const App = () => {
  return (
    <center>
      <NewCake />
      {/* <Cake /> */}
      <Icecream />
    </center>
  );
};

export default App;
