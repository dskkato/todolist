import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    drawChart() {
        const data = [12, 5, 6, 6, 9, 10]

        const svg = d3.select(`.${this.constructor.name}`)
            .append("svg")
            .attr("width", 300)

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => i -  d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }

    componentDidMount() {
        this.drawChart()
    }

    render() {
        return (
            <div className={this.constructor.name}>

            </div>
        )
    }
}

export default BarChart;