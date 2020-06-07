import React, { Component } from "react";
import Valute from './valute.js';
import UnselectedValute from './unselected.js';

class Currency extends Component {

	constructor() {
		super();
		this.state = {
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch("https://www.cbr-xml-daily.ru/daily_json.js")
		.then(res => res.json())
		.then(
			(result) => {
				result.Valute.RUB = {
        		    "ID": "R00000",
        		    "NumCode": "643",
        		    "CharCode": "RUB",
        		    "Nominal": 1,
        		    "Name": "Российский рубль",
        		    "Value": 1,
        		    "Previous": 1
        		};
				this.setState({ data: result, 
								dataCopy: result,
								valuteIsSelected: {'Name': 'Российский рубль', 'Value': 1, 'Previous': 1, 'Nominal': 1},
								isLoaded: true 
				});
			}
		)
	}

	changeFavoriteStatus = code => {
		if (this.state.isLoaded) { 
			let list = this.state.data;
			(list.Valute[code].isFavorite == true) ? (list.Valute[code].isFavorite = false) : (list.Valute[code].isFavorite = true);
			this.setState({ data: list });
		}
	}

	changeSelectedStatusToFalse = () => {
		if(this.state.valuteIsSelected !== false) {
		 	(this.setState({valuteIsSelected: false}));
		}
	}

	changeSelectedStatus = item => {
		this.setState({ valuteIsSelected: this.state.data.Valute[item] });
	}

	render() {
		const { data, isLoaded, valuteIsSelected } = this.state;
		if(isLoaded) {
			const favoriteValutes = Object.entries(data.Valute).reduce((acc, [ k, v ]) => v.isFavorite == true ? { ...acc, [k]: v } : acc, {});
			const standartValutes = Object.entries(data.Valute).reduce((acc, [ k, v ]) => v.isFavorite !== true ? { ...acc, [k]: v } : acc, {});
			const finalValutes = {...favoriteValutes, ...standartValutes};
			const valuteArr = Object.entries(finalValutes);
			const listOfValutes = valuteArr.map(item => {
				return (
					<Valute 
						nominal={item[1].Nominal}
						changeFavoriteStatus={this.changeFavoriteStatus}
						isLoaded={this.state.isLoaded}
						key={item[1].ID}
						previous={item[1].Previous}
						name={item[1].Name}
						value={item[1].Value}
						charCode={item[1].CharCode}
						mainValute={valuteIsSelected.Value}
						mainNominal={valuteIsSelected.Nominal}
					/>				
				)
			});
			const listOfUnselectedValutes = valuteArr.map(item => {
				return (
					<UnselectedValute
						key={item[1].ID}
						name={item[1].Name}
						charCode={item[1].CharCode}
						changeSelectedStatus={this.changeSelectedStatus}
					/>	
				)
			});
			return (
    			<div>
    				<div className='background-volutes'>
					</div>
					<div className='volute-line'></div>
					<div className='selected-valute'><div onClick={this.changeSelectedStatusToFalse}>{ (valuteIsSelected) ? (valuteIsSelected.Name) : (listOfUnselectedValutes) }</div></div>
					<div className='currency'> { listOfValutes } </div>
    			</div>
			);
		} else {
			return (
				<p className='loading'>Loading...</p>
			)
		}
	}
}

export default Currency; 
