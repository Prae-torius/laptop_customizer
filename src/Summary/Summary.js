import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class Summary extends React.Component {
  render() {
    const { selected } = this.props;
    const sumOption = <SummaryOption {...selected} />
    const sumTotal = <SummaryTotal {...selected} />
         
    return (
      <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {sumOption}
            {sumTotal}
          </section>
    )
  }
}

export default Summary;