import React, {Component} from 'react';
import ResultsList from '../results-list/ResultsList';

export default class Tournament extends Component {
  render() {
    const {title, date, video, bracket} = this.props.currentTournament;
    const resultsData = this.props.currentTournament.results.map(id => {
      const result = Object.assign({}, this.props.results.find(res => res.id === id));
      result.player = this.props.players.find(
          player => player.id === result.player);
      if(result.player === undefined) {
        debugger
      }
      return result;
    }, this);

    return (
        <div className="mb-4">
          <h2 className="mb-1">{title}</h2>
          {this.props.renderMode !== 'export' &&
          <p className="font-weight-light">

                    <span className="mr-1">
                        {date}
                    </span>

            {video &&
            <a target="_blank" className="mr-1 no-underline" href={video}>
              <span className="ec ec-tv"></span>
            </a>
            }
            {bracket &&
            <a target="_blank" className="mr-1 no-underline" href={bracket}>
              <span className="ec ec-trophy"></span>
            </a>
            }
          </p>
          }
          {resultsData && <ResultsList results={resultsData}
                                       renderMode={this.props.renderMode}/>}
        </div>
    );
  }
}
