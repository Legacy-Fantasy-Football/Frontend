/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
import "./Chart.css"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LeaguePage extends Component {	
    constructor(props) {
		super(props);
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
        toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            this.chart.render();
        }
        
    render() {
        const options = {
            theme:"light2",
            animationEnabled: true,
            animationDuration: 10000,
            zoomEnabled: true,
            zoomType: "xy",
            axisY :{
                suffix: "",
                crosshair: {
					enabled: true,
					snapToDataPoint: true,
                }},
            axisX:{
                interval: 16,
                crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
            },
            toolTip: {
                shared: "true"
            },
            legend:{
                cursor:"pointer",
                itemclick : this.toggleDataSeries
            },
            data: this.props.chartData
        }

        console.log(options)
        
		
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
   