import React from 'react';

class MessageInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	addMessage = e => {
		e.preventDefault();
		const { input, authorized } = this.state;
		if ((input) && (localStorage.getItem('login'))) {
			this.props.addMessage(input);
			this.setState({ input: ''});
		}
	};

	valueChange = event => {
		this.setState({ input: event.target.value });
	}

	render() {
		const { input } = this.state;
		return(
			<form>
        		<textarea 
        			type='text'
        			value={ input }
    				onChange={this.valueChange}
        		/>
        		<button onClick={this.addMessage}>add task</button>
        	</form>
		)
	}
}

export default MessageInput;