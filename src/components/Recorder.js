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
    this.blobToBase64(recordedBlob.blob);
  };

  blobToBase64(blob) {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        if (!!reader.result) {
          resolve(reader.result);
        } else {
          reject(Error('Failed converting to base64!'));
        }
      };
    });

    promise.then(res => console.log(res)).catch(err => console.log(err));
  }

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
          mimeType='audio/wav;codecs=opus'
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
