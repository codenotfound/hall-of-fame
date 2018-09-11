import React, { Component } from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown-now";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  console.log(hours, minutes, seconds);
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown
    return (
      <div class="jumbotron bg-white mt-4">
        <h2>
          The{" "}
          <a
            target="_blank"
            href="https://carnage.challonge.com/"
            rel="noopener noreferrer"
          >
            next tournament
          </a>{" "}
          starts in:
        </h2>
        <hr class="my-4" />
        <p className="display-4">
          {days && <span className="text-nowrap">{days} days</span>}{" "}
          <span className="text-nowrap"> {hours} hours </span>{" "}
          <span className="text-nowrap">{minutes} minutes </span>{" "}
          <span className="text-nowrap">{seconds} seconds</span>
        </p>
      </div>
    );
  }
};

export default class TournamentCountdown extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <Countdown date={1537624800000} renderer={renderer} />;
  }
}
