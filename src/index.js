import React from 'react';
import ReactDOM from 'react-dom';
import SeasonContent from './SeasonContent';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      //When creating this instance of SeasonContent, need to tell this Component what the season is
      //It will then be up to SeasonContent to figure out whether it's summer/winter and adjust
      return <SeasonContent lat={this.state.lat} />
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
