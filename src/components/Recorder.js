import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

class Recorder extends Component {
  state = {
    record: false,
    blobObject: null
  };

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onStart = () => {
    console.log('Recording begins!');
  };

  onStop = recordedBlob => {
    this.setState({ blobObject: recordedBlob.blobURL });
    console.log(recordedBlob);
  };

  render() {
    return (
      <div>
        <ReactMic
          classNaame='recorder'
          record={this.state.record}
          backgroundColor='#00bcd4'
          visualSetting='sinewave'
          onStart={this.onStart}
          onStop={this.onStop}
          strokeColor='#000'
        />
        {!this.state.record ? (
          <button onClick={this.startRecording}>Start</button>
        ) : (
          <button onClick={this.stopRecording}>Send</button>
        )}

        <audio
          ref='audioSource'
          controls='controls'
          src={this.state.blobObject}
        />
      </div>
    );
  }
}

export default Recorder;
