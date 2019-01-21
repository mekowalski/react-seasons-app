import React from 'react';
import ReactDOM from 'react-dom';
import SeasonContent from './SeasonContent';
import Loading from './Loading';

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
      return <SeasonContent lat={this.state.lat} />
    }

    return <Loading message='Please accept location request'/>;
  }//this message prop will override the default prop
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
