import React, { Component } from 'react';
import Tournament from "../tournament/Tournament";
import {data} from './data';

export default class TournamentList extends Component {
  render() {

    const tournamentItems = data.map((tournament, i) => <Tournament key={`tournament_${i}`} {...tournament}/>);

    return (
      <div className="container">
        <h1 className="text-center">Hall Of Fame</h1>
          {tournamentItems}
      </div>
    );
  }
}