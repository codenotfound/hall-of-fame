import React, {Component} from 'react';
import Tournament from '../tournament/Tournament';
import SearchInput from '../search-input/SearchInput';
import Loader from '../loader/Loader';

export default class TournamentList extends Component {
  state = {
    tournaments: [],
  };

  componentDidMount() {
    this.setState({
      tournaments: this.props.tournaments,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.tournaments !== prevProps.tournaments) {
      this.setState({
        tournaments: this.props.tournaments,
      });
    }
  }

  filterByNickName = evt => {
    // TODO: make data querying easier
    const filteredTournaments = this.props.tournaments.filter(tournament => {
      const searchedNickname = evt.target.value.toLowerCase();
      const expandedTournament = {
          ...tournament,
          results: tournament.results.map(resultId => this.props.results.find(result => result.id === resultId), this)
      };
      expandedTournament.results = expandedTournament.results.map(result => {
        return {...result,
        player: this.props.players.find(player => player.id === result.player)}
      }, this);

      return expandedTournament.results.some(result =>
          result.player.nickname.toLowerCase().indexOf(searchedNickname) >= 0,
      );
    });
    this.setState({
      tournaments: filteredTournaments,
    });
  };

  render() {
    const tournamentItems = this.state.tournaments.map((tournament, i) => (
        <Tournament key={`tournament_${i}`}
                    currentTournament={tournament}
                    tournaments={this.props.tournaments}
                    results={this.props.results}
                    players={this.props.players}
                    renderMode={this.props.renderMode}
        />
    ), this);

    return (
        <div className="container">
          <h1 className="display-3 text-center mb-5 mt-2">Carnage League Hall
            Of&nbsp;Fame</h1>
          <SearchInput handleChange={this.filterByNickName}/>

          {this.props.isLoading && <Loader/>}

          {!this.props.isLoading && tournamentItems}
        </div>
    );
  }
}
