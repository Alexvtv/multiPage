import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: this.props.date
		};
	}

	render() {
		return(
			<div>
				<p>{ this.props.description }  <span className='user'>{ this.props.user }</span><span className='date'>{ this.state.date }</span><img src={ localStorage.getItem('avatar') } /></p>
			</div>
		)
	}
}

export default Message;