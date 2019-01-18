import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //This function is not required by React, it's a JS function
  //This function will automatically be called before anything else
  constructor(props) {
    super(props)

    this.state = { lat: null } //default of null means 'i dont know what the latitude value is yet'
  }

  //React says I have to define render()!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );

    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
