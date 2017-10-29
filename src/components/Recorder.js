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
      <div className='recorder'>
        <ReactMic
          className='recorder-mic'
          record={this.state.record}
          backgroundColor='#fff'
          visualSetting='sinewave'
          onStart={this.onStart}
          onStop={this.onStop}
          strokeColor='#fff'
        />
        {!this.state.record ? (
          <div className='recorder-btn play' onClick={this.startRecording}>
            Start
          </div>
        ) : (
          <div className='recorder-btn stop' onClick={this.stopRecording}>
            Record
          </div>
        )}

        {/**<audio
          ref='audioSource'
          controls='controls'
          src={this.state.blobObject}
        />*/}
      </div>
    );
  }
}

export default Recorder;
