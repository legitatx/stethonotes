import React, { Component } from 'react';
import socket from 'socket.io-client';

class Chat extends Component {
  state = { input: '', messages: this.props.messages, endpoint: 'api.xxxx' };

  componentDidMount() {
    const io = socket(this.state.endpoint);
    this.messageEvent(io);
    this.handleSubmit(io);
  }
  messageEvent(io) {
    io.on('Chat Message', data => {
      this.setState({ messages: data });
    });
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };
  handleSubmit = (e, io) => {
    e.preventDefault();
    io.emit('new message', { message: this.state.messages });
  };
  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type='submit' onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Chat;
