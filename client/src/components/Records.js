import React, { Component } from "react";
import { Table } from "reactstrap";

class Records extends Component {
	render() {
		const records = this.props.records;
		let i = 1;
		return (
			<div>
				<h2>Past Calculation Records</h2>
				<p>Only Latest 10 Records Shown</p>
				<Table dark>
					<tbody>
						{records.map((record) => (
							<tr key={i}>
								<th key={i++}>{record}</th>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Records;
