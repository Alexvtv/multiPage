import React, { Component } from "react";
import MessageInput from './messageInput.js';
import Message from './message.js';

class Chat extends Component {
	constructor() {
		super();
		this.state = {
			messages: []
		}
	}

	addMessage = text => {
		console.log('clicked');
		this.setState(state => {
			let { messages } = state;
			messages.push({
				id: messages.length,
				description: text
			});
			return messages;
		})
	}

	render() {
		const date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
		const user = localStorage.getItem('login');
		const messages = this.state;
		const messagesArr = messages.messages;
		const finalMessages = messagesArr.reverse().map(item => {
			return (
				<Message 
					date={date}
					user={user}
					key={item.id}
					description={item.description}
				/>
			)
		});
    	return (
    		<div className='chat'>	
    			<div className='background'>
				</div>
				<div className='main-chat'>
					<div class='main-chat__messages'>
						{ finalMessages }
					</div>
					<div className='chat-input'>
						<MessageInput 
							addMessage={this.addMessage}
						/>
					</div>
				</div>
    		</div>
		);
	}
}

export default Chat; 