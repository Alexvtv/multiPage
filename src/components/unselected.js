import React, { Component } from "react";

class UnselectedValute extends Component {

	constructor() {
		super();
		this.state = {
		}
	}

	handleClick = () => {
		this.props.changeSelectedStatus(this.props.charCode);
	}

	render() {
    	return (
    		<p onClick={this.handleClick}>{this.props.name}</p>
    	)
	}
}

export default UnselectedValute;