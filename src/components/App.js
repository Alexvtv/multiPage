import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Currency from './Currency.js';
import Home from './Home.js';
import Login from './Login.js';
import Profile from './Profile.js';
import Panel from './Profile.js';
import Chat from './chat.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			login: '',
			password: '',
			authorized: localStorage.getItem('authorized')
		}
	}

	authorization = takenLogin => {
		localStorage.setItem('authorized', true);
		localStorage.setItem('login', takenLogin);
        localStorage.setItem('avatar', '/../images/avatar.jpg');
		this.setState({ authorized: true });
        location.assign('./');
	}

	authorizationCancel = () => {
		localStorage.setItem('authorized', false);
		localStorage.setItem('login', '');
		this.setState({ authorized: false });
        location.assign('./');
	}


  	render() {
    	return (
    	<div className='app'>
    	  	<Router>
    	    	<div>
    	      		<nav>
    	        		<ul>     
    	    		     	<Link to='/'><li className='link home-link'>Home </li></Link>
    	    		      	<Link to='/currency'><li className='link currency-link'>Currency </li></Link>		      	
    	    		      	{ localStorage.getItem('authorized') == 'true' ? <Link to='/profile'><li className='link account-link'>Account </li></Link> : <Link to='/login'><li className='link account-link'>Account </li></Link> } 

    	    		    </ul>
    	    		</nav>
    	    		<div>
                        <Route exact path='/chat' component={Chat}/>
    	    		    <Route exact path='/' component={Home}/>
    	    		    <Route exact path='/currency' component={Currency}/>
    	    		    <Route exact path='/login'  render={ ()=> <Login authorization={this.authorization} /> }/>
    	    		    <Route exact path='/profile' render={ ()=> <Profile authorizationCancel={this.authorizationCancel} /> }/>
    	    		</div>
    	    	</div>
    	  	</Router>
    	</div>
    	)
  	}
}

export default App; 
