import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar"
import Calculator from "./components/Calculator";
import Records from "./components/Records";
import socketIOClient from "socket.io-client";
const socket = socketIOClient()
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			records: [],
			results: "",
		}
		socket.on(
			"rerender",
			(msg) => {
				this.getAllRecords();
			}
		);

	}
	componentDidMount() {
		this.getAllRecords();
	}

	onClick = (button) => {
		if (button === "=") {
			this.calculate();
		} else if (button === "CE") {
			this.backspace();
		} else if (button === "AC") {
			this.reset();
		} else {
			this.appendInput(button);
		}
	};

	send = () => {
		socket.emit("new result");
	};
	// Caution: this method might be harmful, eval() should be replaced.
	calculate = () => {
		let result = "";
		try {
			result = eval(this.state.results);
		} catch (err) {
			result = "Wrong Input";
		}
		if (result !== "Wrong Input") {
			this.postRecord(result);
			this.send();
			
		}
		this.setState({ results: result });
	};

	backspace = () => {
		this.setState((prevState) => ({
			results: prevState.results.slice(0, -1),
		}));
	};

	reset = () => {
		this.setState({ results: "" });
	};

	appendInput = (button) => {
		this.setState((prevState) => ({
			results: `${prevState.results}${button}`,
		}));
	};
	getAllRecords = () => {
		fetch("/api/records")
			.then((res) => res.json())
			.then((records) => this.setState({ records }));
	};
	postRecord = (result) => {
		const reverseTime = 1000000000000 - new Date().getTime();
		fetch("api/records", {
			method: "POST",
			body: JSON.stringify({
				time: reverseTime,
				value: `${this.state.results}=${result}`,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json)
			.then(this.getAllRecords());
	};
	render() {
		return (
			<div className="App">
				<HeaderBar/>
				<div className="calculator">
					<Calculator onClick={this.onClick} results={this.state.results} />
				</div>
				<div className='records'>
					<Records records={this.state.records} />
				</div>
				
			</div>
		);
	}
}

export default App;
