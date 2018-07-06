import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {MedalClassNames} from '../../common/constants';

export default class Result extends Component {
  render() {
    return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <span className={`ec ${MedalClassNames[this.props.placement] } mr-1`}></span>
              <NavLink className="card-link" to={`/player/${this.props.player.id}`}>
                {this.props.player.nickname}
              </NavLink>

              <span className={`border ml-2 flag-icon flag-icon-${ this.props.player.country.toLowerCase() }`}></span>
            </h4>
            <p className="card-text">{this.props.prize}</p>
          </div>
        </div>
    );
  }
}
