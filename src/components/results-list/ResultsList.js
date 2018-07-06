import React, {Component} from 'react';
import Result from "../result/Result";
import ResultForExport from "../result-for-export/ResultForExport";

export default class ResultsList extends Component {
  render() {
    const resultItems = this.props.results
      .sort((a, b) => a.placement - b.placement)
      .map((result, i) => {
          if (this.props.renderMode === 'export') {
            return <ResultForExport key={`result_${i}`} {...result} />
          } else {
            return <Result key={`result_${i}`} {...result} />
          }
        }
      );

    return (
      <div className="card-group">
        {resultItems}
      </div>
    );
  }
}
