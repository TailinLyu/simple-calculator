import React, { Component } from "react";
import "../App.css";
class Keyboard extends Component {
	render() {
		return (
			<div className="buttons">
								<button
									className="button"
									name="("
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									(
								</button>
								<button
									className="button"
									name="CE"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									CE
								</button>
								<button
									className="button"
									name=")"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									)
								</button>
								<button
									className="button"
									name="AC"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									AC
								</button>
								<button
									className="button"
									name="7"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									7
								</button>
								<button
									className="button"
									name="8"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									8
								</button>
								<button
									className="button"
									name="9"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									9
								</button>
								<button
									className="button"
									name="+"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									+
								</button>
								<button
									className="button"
									name="4"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									4
								</button>

								<button
									className="button"
									name="5"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									5
								</button>

								<button
									className="button"
									name="6"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									6
								</button>

								<button
									className="button"
									name="*"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									*
								</button>

								<button
									className="button"
									name="1"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									1
								</button>

								<button
									className="button"
									name="2"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									2
								</button>

								<button
									className="button"
									name="3"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									3
								</button>

								<button
									className="button"
									name="/"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									/
								</button>

								<button
									className="button"
									name="0"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									0
								</button>

								<button
									className="button"
									name="."
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									.
								</button>

								<button
									className="button"
									name="-"
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									-
								</button>

								<button
									className="button"
									name="="
									onClick={(event) => this.props.onClick(event.target.name)}
								>
									=
								</button>
			</div>
		);
	}
}

export default Keyboard;
