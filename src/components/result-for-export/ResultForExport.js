import React, {Component} from 'react';
import { flag } from 'country-code-emoji';
const medalEmojis = {
    1: '🥇',
    2: '🥈',
    3: '🥉'
};

export default class ResultForExport extends Component {
    render() {
        return (
          <div style={{width: '100%'}}>
            {medalEmojis[this.props.placement]} и приз {this.props.prize}: {flag(this.props.player.country) } {this.props.player.nickname}
            &nbsp;
            {this.props.placement === 1 &&
                <span role="img" aria-label="award">
                    🏆
                </span>
            }
          </div>
        );
    }
}
