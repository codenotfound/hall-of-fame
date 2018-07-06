import React, {Component} from 'react';
import './App.css';
import 'loaders.css/loaders.css';
import TournamentList from './components/tournament-list/TournamentList';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Media from './components/media/Media';
import Player from './components/player/Player';
import VideoGrid from './components/video-grid/VideoGrid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import base from './base';

const queryString = require('query-string');

class App extends Component {

  state = {
    tournaments: [],
    players: [],
    results: [],
    isLoading: true, // shows/hides loader
    renderMode: 'default' // ?renderMode=export is needed for easier copy-pasting to vk/discord etc.
  };

  getRenderMode() {
    const {renderMode} = queryString.parse(window.location.search);
    return renderMode;
  }

  componentDidMount() {
    // sync state to firebase
    const endpoints = ['tournaments', 'players', 'results'];

    endpoints.forEach(endpoint => {
      this[`${endpoint}Promise`] = new Promise((resolve, reject) => {
        const isTournament = endpoint === 'tournaments';
        const options = {
          context: this,
          state: endpoint,
          ...(isTournament && {
            queries: {
              orderByChild: 'sortIndex',
            },
          }),
          asArray: true,
          then: () => resolve(true),
          onFailure: () => reject('re-base syncState error')
        };
        this[`${endpoint}Ref`] = base.syncState(`entities/${endpoint}`, options);
      });
    }, this);

    const endpointPromises = endpoints.map(
        endpoint => this[`${endpoint}Promise`], this);

    Promise.all(endpointPromises).then(() => {
      this.setState({isLoading: false});
    });

    // set renderMode
    const renderMode = this.getRenderMode();
    this.setState({renderMode});
  }

  render() {
    return (
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/"
                   render={() => (
                       <TournamentList
                           tournaments={this.state.tournaments}
                           players={this.state.players}
                           results={this.state.results}
                           renderMode={this.state.renderMode}
                           isLoading={this.state.isLoading}/>
                   )}/>
            <Route path="/media" component={Media}/>
            <Route path="/vods" render={() => (
                <VideoGrid tournaments={this.state.tournaments}
                           isLoading={this.state.isLoading}/>
            )}/>
            <Route path="/about" component={About}/>
            <Route path="/player/:playerId" render={props => (
                <Player {...props}
                        tournaments={this.state.tournaments}
                        players={this.state.players}
                        results={this.state.results}
                        isLoading={this.state.isLoading}
                />
            )}/>
          </div>
        </Router>);
  }

}

export default App;
