import React, { Component } from 'react'
import options from './config'
import axios from 'axios'
import { Recorder } from 'react-voice-recorder'

export default class Microphone extends Component {
	constructor() {
		super()
		this.state = {
			audioDetails: {
				url: null,
				blob: null,
				chunks: null,
				duration: {
					h: 0,
					m: 0,
					s: 0,
				},
			},
			elem: {},
		}
		this.handleAudioStop = this.handleAudioStop.bind(this)
		this.handleAudioUpload = this.handleAudioUpload.bind(this)
		this.handleRest = this.handleRest.bind(this)
	}
	componentDidMount() {
		setTimeout(
			this.setState({ elem: this.props.elem, _id: this.props._id }),
			100
		)
	}
	handleAudioStop(data) {
		this.setState({ audioDetails: data })
	}
	async handleAudioUpload(file) {
		let elem = this.props.elem

		let formdata = new FormData()
		formdata.append('sound', file, `sound-${elem}.mp3`)
		formdata.append('id', elem)
		await axios.post(options.link + 'upload/test/audio/' + elem, formdata)
		// this.props.upload(elem.index)
		// let arr = this.state.arr
		// arr[elem.index].audio = true
		// this.setState({ arr: arr })
	}
	handleRest() {
		const reset = {
			url: null,
			blob: null,
			chunks: null,
			duration: {
				h: 0,
				m: 0,
				s: 0,
			},
		}
		this.setState({ audioDetails: reset })
	}
	render() {
		return (
			<React.Fragment>
				<Recorder
					record={true}
					title={'New recording'}
					audioURL={this.state.audioDetails.url}
					showUIAudio
					handleAudioStop={(data) => this.handleAudioStop(data)}
					handleAudioUpload={(data) => this.handleAudioUpload(data)}
					handleRest={() => this.handleRest()}
				/>
				<audio
					src={options.link + 'get/stream/' + this.state._id}
				></audio>
			</React.Fragment>
		)
	}
}
