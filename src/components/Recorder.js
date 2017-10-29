import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactMic } from 'react-mic';
import RaisedButton from 'material-ui/RaisedButton';

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
    // this.blobToBase64(recordedBlob.blob, async function(base64) {
    //   var update = JSON.stringify({ blob: base64 });
    //   console.log(update);
    //   try {
    //     axios.post('https://api.stethonotes.tech/recording', {
    //       blob: base64
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });
  };

  // blobToBase64 = (blob, cb) => {
  //   var reader = new FileReader();
  //   reader.onload = function() {
  //     var dataUrl = reader.result;
  //     var base64 = dataUrl.split(',')[1];
  //     cb(base64);
  //   };
  //   reader.readAsDataURL(blob);
  // };

  // blobToBase64(blob) {
  //   const promise = new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(blob);
  //     reader.onload = () => {
  //       if (!!reader.result) {
  //         resolve(reader.result);
  //       } else {
  //         reject(Error('Failed converting to base64!'));
  //       }
  //     };
  //   });

  //   promise
  //     .then(res => {
  //       this.sendRecording(res);
  //     })
  //     .catch(err => console.log(err));
  // }

  // async sendRecording(base64) {
  //   try {
  //     const res = await fetch('https://api.stethonotes.tech/recording', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         blob: base64
  //       })
  //     });
  //     const data = await res.json();
  //     // let info = ctx.baseAudioContext
  //     //   .decodeAudioData(data)
  //     //   .then(res => console.log(res));
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
          mimeType='audio/wav'
        />
        {!this.state.record ? (
          <div className='recorder-btn play' onClick={this.startRecording}>
            Start
          </div>
        ) : (
          <div className='recorder-btn stop' onClick={this.stopRecording}>
            Stop
          </div>
        )}

        <audio
          ref='audioSource'
          controls='controls'
          src={this.state.blobObject}
        />
        <RaisedButton
          style={{ marginTop: '2em' }}
          disabled={!this.state.blobObject}
          label='Send To Process'
          primary={true}
          containerElement={<Link to='/patient-overview' />}
        />
      </div>
    );
  }
}

export default Recorder;
