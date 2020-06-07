import React, { Component } from "react";

class FavPoint extends Component {

	constructor() {
		super();
		this.state = {
			isFavorite: false
		}
	}

	handleClick = () => {
		this.setState({ isFavorite: !this.state.isFavorite});
		this.props.changeFavoriteStatus;
	}

	render() {
    	return (
    		
    	)
	}
}

export default FavPoint;