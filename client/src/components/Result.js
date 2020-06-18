import React, { Component } from "react";
import "../App.css";
class Result extends Component {
	render() {
		return (
            <div className="result">
				<p>{this.props.results === "" ? 0 : this.props.results}</p>
			</div>
		);
	}
}

export default Result;
