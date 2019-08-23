import React from 'react';
import Plot from 'react-plotly.js';

export default class App extends React.Component {

  state = {
    data: {
      x: [1, 2, 3],
      y: [2, 6, 3],
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Plot
        data={[
          {
            ...this.state.data,
            type: 'scatter',
            mode: 'lines+points',
            marker: {
              color: 'red',
            },
          },
          {
            ...this.state.data,
            type: 'bar',
          },
        ]}
        layout={{
          width: 320,
          height: 240,
          title: 'A Fancy Plot'
        }}
      />
    );
  }
}