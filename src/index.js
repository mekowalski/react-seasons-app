import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null } // this can be referenced inside App Component
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );

    return <div>Latitude: {this.state.lat}</div> // this can be referenced inside App Component
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
