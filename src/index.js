import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
  ) //takes some time to determine where user location is

  return (
    <div>hello seasons</div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
