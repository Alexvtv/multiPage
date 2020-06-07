import React, { Component } from "react";

class Profile extends Component {
	render() {
    	return (
    	<div>
    		<div className='background'>
    		</div>
    		<div className='profile'>
          <p>Upload avatar <input className='data' type='file' accept='png, jpeg' /></p>
          <input type='button' value='загрузить' />
          <hr />
  				<p>Nickname <span className='data'> {localStorage.getItem('login')}</span></p>
  				<hr />
  				<p>Email <span className='data'> (ur mail)</span></p>
  				<hr />
  				<button 
  					onClick={this.props.authorizationCancel}
  				>unlogin</button>
			</div>
		</div>
		);
	}
}

export default Profile; 