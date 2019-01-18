import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      //dont get into bad practice of not dealing with errors
      error => {
        this.setState({ errorMessage: error.message})
      }
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
