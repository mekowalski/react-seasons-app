import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null }

    //the instance the App Component shows on screen or and instance is created, it will begin attempting
    //to get user location
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setState is called in order to update State
        this.setState({ lat: position.coords.latitude })
      }, //callback function
      error => console.log(error)
    );
  }

  //later the render() method won't double fetch
  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
