/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
import "./Chart.css"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class BarChart extends Component {
    constructor(props) {
		super(props);
    }
	render() {
		const options = {
			title: {
				text: "Basic Column Chart"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: this.props.barChartData
			}
			]
		}
		return (
		<div className='chart'>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
   