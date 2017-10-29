import React, { Component } from 'react';
import socket from 'socket.io-client';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';

const io = socket('this.state.endpoint');

class MessageInput extends Component {
  state = { input: '' };

  handleChange = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    io.emit('new message', { message: this.state.messages });
    this.props.submitText(e.target.value);
  };

  render() {
    return (
      <form>
        <TextField
          hintText='Chat with Your Doctor'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <FloatingActionButton onClick={this.handleSubmit} mini={true}>
          <ContentSend />
        </FloatingActionButton>
      </form>
    );
  }
}

const Messages = props => {
  return props.messages.map(message => (
    <div style={{ alignSelf: 'none' }} key={message.id}>
      {message.message}
    </div>
  ));
};

class Chat extends Component {
  state = {
    messages: [
      {
        id: 0,
        message:
          'I see that you are suffering from an headache. Based on my Observations, I recommend you better chill out.'
      }
    ],
    id: 1
  };

  componentDidMount() {
    this.messageEvent();
  }

  submitMessage = message => {
    this.setState({
      messages: [
        ...this.state.messages,
        { message: message, id: this.state.id++ }
      ],
      id: this.state.id++
    });
  };
  messageEvent() {
    io.on('Chat Message', data => {
      this.setState({ messages: this.state.data });
    });
  }

  render() {
    return (
      <div className='landing-page message-container'>
        <Messages messages={this.state.messages} />
        <MessageInput submitText={this.submitMessage} />
      </div>
    );
  }
}

export default Chat;
