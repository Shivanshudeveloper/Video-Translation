import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ReactSpeech.css'
class ReactSpeech extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isRecording: false,
			recorderbool: false,
		}
		// check if SpeechRecognition is supported
		window.SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition
		if (!window.SpeechRecognition) {
			console.log('SpeechRecognition is not supported from your browser!')
			return
		}

		// Bind functions
		this.onClickStart = this.onClickStart.bind(this)
		this.onClickStop = this.onClickStop.bind(this)
		this.startRecording = this.startRecording.bind(this)
		this.stopRecording = this.stopRecording.bind(this)

		// Init the recognition object
		this.recognition = new window.SpeechRecognition()

		// TODO: validate lang property as BCP 47 format
		this.recognition.lang = this.props.lang
		this.recognition.interimResults = true

		// Update recording flag and UI
		this.recognition.addEventListener('end', () => {
			this.stopRecording()
			// this.startRecording()
		})

		// On result emit the event to parent scope
		this.recognition.addEventListener('result', (event) => {
			const text = Array.from(event.results, function (r) {
				return r[0]
			})
				.map(function (result) {
					return result.transcript
				})
				.join('')
			this.props.onText(text)
		})
	}
	onClickStart() {
		// this.state.isRecording ? this.stopRecording() : this.startRecording()
		this.setState({recorderbool: true})
		this.startRecording()
	}
	onClickStop() {
		// this.state.isRecording ? this.stopRecording() : this.startRecording()
		this.setState({recorderbool: false})

		this.stopRecording()
	}
	startRecording() {
		this.recognition.start()
		this.setState({
			isRecording: true,
		})
	}
	stopRecording() {
		this.recognition.stop()
		this.setState({
			isRecording: false,
		})
	}
	componentWillUpdate(nextProps, nextState) {
		this.recognition.lang = nextProps.lang
	}

	render() {
		return (
			<>
				{this.state.recorderbool === false ? (
					<>
							<div
					className={
						'react-speech ' +
						(this.state.isRecording ? 'recording' : '')
					}
					onClick={this.onClickStart}
				>
					{/* <button className="recordstart" onClick={this.onClick}> */}
					{/* </button> */}
					<span>{this.state.isRecording}</span>
					{this.state.email}
				</div>
					</>
				) : (
					<div
					className={
						'react-speech ' +
						(this.state.isRecording ? 'recording' : '')
					}
					onClick={this.onClickStop}
				>
					{/* <button className="recordstart" onClick={this.onClick}> */}
					{/* </button> */}
					<span>{this.state.isRecording}</span>
					{this.state.email}
				</div>
				)}
			</>
		)
	}
}
// For a complete list of options
// @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
ReactSpeech.propTypes = {
	lang: PropTypes.string,
	onText: PropTypes.func,
}
export default ReactSpeech
