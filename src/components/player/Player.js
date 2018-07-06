import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import Loader from '../loader/Loader';
import {MedalClassNames} from '../../common/constants';

const getMedals = (results, playerId) => {
  const playerResults = results.filter(result => result.player === playerId);
  return playerResults.reduce((prev, next) => {
    prev[next.placement] += 1;
    return prev;
  }, {1: 0, 2: 0, 3: 0});
};

const getPlayerById = (players, playerId) => {
  return players.find(player => player.id === playerId);
};

// Tournament name, date, placement, prize
const getResults = (results, tournaments, playerId) => {
  const playerResults = results.filter(result => result.player === playerId);
  playerResults.forEach(result => {
    const resultTournament = tournaments.find(tournament => tournament.results.includes(result.id));
    result.tournamentName = resultTournament.title;
    result.date = resultTournament.date;
    result.sortIndex = resultTournament.sortIndex;
  });
 return playerResults.sort((a, b) => {return a.sortIndex - b.sortIndex; });
};

class Player extends Component {
  render() {
    if (this.props.isLoading) {
      return <Loader className='mt-2'/>;
    } else {
      const {match: {params: {playerId}}, tournaments, results, players} = this.props;
      const player = getPlayerById(players, playerId);
      const medals = getMedals(results, playerId);
      const resultsData = getResults(results, tournaments, playerId);
      return (
          <Container>
            <Row className='mt-2'>
              <Col md={4}>
                <Card className='bg-dark' inverse>
                  <CardHeader>Player</CardHeader>
                  <CardBody>
                    <CardTitle>
                      {player.nickname}
                      <span
                          className={`border ml-2 flag-icon flag-icon-${ player.country.toLowerCase() }`}></span>
                      {Object.keys(medals).map(placement =>
                          (<div className="player-medal-list mt-1" key={placement}>
                            {(medals[placement] > 0) &&
                            [...Array(medals[placement])].map(
                                (item, i) => (<span key={`item_${i}`}
                                                    className={`ec ${MedalClassNames[placement] } mr-1`}></span>),
                            )
                            }
                          </div>),
                      )}
                    </CardTitle>
                  </CardBody>
                </Card>

              </Col>
              <Col>
                <Card className='bg-light'>
                  <CardHeader>Results</CardHeader>
                  <ListGroup flush={true}>
                    {
                      resultsData.map(result => (
                          <ListGroupItem key={result.id}>
                            <span
                                className={`ec ${MedalClassNames[result.placement] } mr-1`}></span>
                            <span
                                className="badge badge-secondary mr-2">{result.date}</span>
                            <span className="text-dark">
                              {result.tournamentName}
                            </span>
                            {result.prize && <div className="text-info">Prize: {result.prize}</div>}
                          </ListGroupItem>
                      ))
                    }
                  </ListGroup>
                </Card>

              </Col>
            </Row>
          </Container>
      );
    }
  }
}

export default Player;
