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
			updated: false,
			recorded: true,
			hua:false
		}
		this.handleAudioStop = this.handleAudioStop.bind(this)
		this.handleAudioUpload = this.handleAudioUpload.bind(this)
		this.handleRest = this.handleRest.bind(this)
		this.classgame = this.classgame.bind(this)
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ elem: this.props.elem, _id: this.props._id })
			this.setState({ hua: true })
			// console.log(this.state)
			// console.log(this.props)
		}, 1000)

		setInterval(()=>{
			if(this.state.updated===true){
				this.props.set_audio_to_true()
			}
		},1000)
	}
	classgame() {
		var element = document.getElementsByClassName('_1Yplu')
		// var element1 = document.getElementsByClassName('_1dpop')
		if (this.state.recorded) {
			for (var i = 0; i < element.length; i++) {
				element[i].classList.add('show')
			}
			// for (var i = 0; i < element1.length; i++) {
			// 	element1[i].classList.add('hide')
			// }
			
			// if (this.state.recorded) {document.getElementsByClassName('_1Yplu').classList.remove('_1Yplu');}
		}
	}
	handleAudioStop(data) {
		this.setState({ audioDetails: data })
		this.setState({ recorded: true })
		this.setState({ hua: false })
		this.classgame()
	}
	async handleAudioUpload(file) {
		let elem = this.props.elem
		let formdata = new FormData()
		formdata.append('sound', file, `sound-${elem}.mp3`)
		formdata.append('id', elem)
		await axios.post(options.link + 'upload/test/audio/' + elem, formdata)
		// this.props.upload(elem.index)
		this.setState({ updated: true })
		// let arr = this.state.arr
		// arr[elem.index].audio = true
		// this.setState({ arr: arr })
		alert('Audio Uploaded')		
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
		alert('Audio Reset')
	}
	render() {
		return (
			<React.Fragment>
				<Recorder
					record={true}
					title={'Please Record Transcript'}
					audioURL={this.state.audioDetails.url}
					showUIAudio
					handleAudioStop={(data) => this.handleAudioStop(data)}
					handleAudioUpload={(data) => this.handleAudioUpload(data)}
					handleRest={() => this.handleRest()}
				/>
				{ this.state.hua===true ? (
					<>
						<span>Previous Recording:</span>
						<br />
						<audio controls>
							<source
								src={
									options.link +
									'get/stream/' +
									this.state._id
								}
								type='audio/mp3'
							/>
						</audio>
					</>
				) : (
					''
				)}
			</React.Fragment>
		)
	}
}
