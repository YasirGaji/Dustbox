import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
          />
        );
      })};
    </div>
  )
}
