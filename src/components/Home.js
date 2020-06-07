import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
	constructor() {
		super();
		this.state = {
		}
	}


	render() {
    	return (
    		<div>
    			<div className='background'>
				</div>
				<div className='home'>
					<h4>Домашняя страница</h4>
					<div className='forum'>
						<hr />
						<h4>Форум</h4>
						<Link to='/chat'><p className='chat-link'>Chat </p></Link>
    	    		</div>
    			</div>
    		</div>
		);
	}
}

export default Home; 