import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Result from "./Result";

class Calculator extends Component {
	render() {
		return (
			<div className="Calculator">
				<Result results={this.props.results} />
				<Keyboard onClick={this.props.onClick} />
			</div>
		);
	}
}

export default Calculator;
