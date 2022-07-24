import { html, css, LitElement } from 'lit'

export class iOWebcamView extends LitElement {
  static properties = {
    audio: { type: Boolean },
    width: { type: Number },
    height: { type: Number },
    deviceId: { type: String },
  }

  constructor() {
    super()
    this.audio = false;
    this.width = 640;
    this.height = 480;
  }
  willUpdate() {
    this.contraints = {
      audio: this.audio,
      video: {
        width: this.width,
        height: this.height,
      }
    }
    if (this.deviceId) {
      console.info("Using deviceId: ", this.deviceId);
      this.contraints.video.deviceId = this.deviceId
    }
    this.getMedia();
  }
  getMedia() {
    navigator.mediaDevices.getUserMedia(this.contraints)
      .then(stream => {
        const video = this.renderRoot.querySelector('video');
        video.srcObject = stream
        video.onloadedmetadata = function(e) {
          video.play();
        };
      }).catch(err => {
        console.error(err)
      }
      )
  }

  render() {
    return html`
      <video>Webcam stream goes here, ty</video>
    `
  }

  static get styles() {
    return css`
      video {
        width: 100%;
        height: 100%;
      }
    `
  }
}

window.customElements.define('io-webcam-view', iOWebcamView)
