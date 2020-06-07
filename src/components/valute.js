import React, { Component } from "react";

class Valute extends Component {

	constructor() {
		super();
		this.state = {
			isFavorite: false
		}
	}

	handleClick = () => {
		this.setState({ isFavorite: !this.state.isFavorite});
		this.props.changeFavoriteStatus(this.props.charCode);
		console.log(this.props.mainValute);
	}

	render() {
		let sum = this.props.value / this.props.nominal / (this.props.mainValute / this.props.mainNominal);
		let prevSum = this.props.previous / this.props.nominal / (this.props.mainValute / this.props.mainNominal);
		sum = sum.toFixed(4);
    	return (
    		<div>
    			<div onClick={this.handleClick} >
    				{ (this.state.isFavorite) ? (<p>&#128293;</p>) : (<p></p>) }
    			</div>
    			<p className='name'>{this.props.name}</p><p className='value'>{sum} {(sum > prevSum) ? (<span>▲</span>) : (<span>▼</span>)}</p>
    		</div>
    	)
	}
}

export default Valute;