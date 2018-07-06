import React, {Component} from 'react';
import YoutubeEmbed from '../youtube-embed/YoutubeEmbed';
import Loader from '../loader/Loader';

const VideoColumn = props => (
    <div className="col-sm-4 mb-4">
        <YoutubeEmbed {...props} />
    </div>
);

export default class VideoGrid extends Component {
    render() {
        const videoColumns = [];
        this.props.tournaments.forEach((tournament, i) => {
           if(tournament.video && tournament.video.includes('you') && tournament.title) {
               videoColumns.push(
                   <VideoColumn
                       src={tournament.video}
                       title={tournament.title}
                       key={`${tournament.title}_${i}`}
                   />
               );
           }
        });

        return (
            <div className="container">
                <h1 className="display-3 mb-5 mt-2">VODs</h1>
                <div className="row">
                  {this.props.isLoading && <Loader/>}

                  {!this.props.isLoading && videoColumns}
                </div>
            </div>
        )
    }
}
