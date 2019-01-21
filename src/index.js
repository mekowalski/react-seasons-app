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

  //if conditional logic is necessary, instead put it in a Helper function, not the render() method
  //Helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonContent lat={this.state.lat} />;
    }

    return <Loading message='Please accept location request'/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
