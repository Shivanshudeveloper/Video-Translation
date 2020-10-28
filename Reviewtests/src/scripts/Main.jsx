import React, { Component } from 'react'
import ReactSpeech from './lib'
import options from './config'
import qs from 'query-string'
import axios from 'axios'
import Microphone from './Microphone'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import katex from 'katex'
import 'katex/dist/katex.min.css'
export default class Main extends Component {
	constructor(props) {
		super(props)
		this.sunhandleChange = this.sunhandleChange.bind(this)
		this.clickrecord = this.clickrecord.bind(this)
		this.set_audio_to_true = this.set_audio_to_true.bind(this)
	}
	state = {
		lang: 'hi-IN',
		email: '',
		text: '',
		doc: '',
		course: '',
		first: ' ',
		result: { _id: '' },
		approval: 'Progress',
		localApprove: 'hello',
		language: '',
		courseName: '',
		recorder: false,
		audio: false,
		sentReview: false,
		lec: 6, // change here
		url: '/lec7?usere={...this.state.first}',
	}

	componentDidMount() {
		const { usere } = qs.parse(this.props.location.search)
		this.setState({ email: usere }, async () => {
			await this.get_data()
			this.forceUpdate()
			console.log(this.state)
		})
	}
	set_audio_to_true() {
		this.setState({ audio: true })
	}
	async get_data() {
		const result = await axios.post(options.link + 'auth/login', {
			email: this.state.email,
			password: 'password',
		})
		localStorage.setItem('email', this.state.email)
		localStorage.setItem('auth', result.data.token)
		this.setState({
			result: result.data,
			language: result.data.language,
			course: result.data.course.discipline,
			first: result.data.email,
			courseName: result.data.course.course_name,
			lang: options.lang[result.data.language],
		})
		// console.log(this.state.first)
		let result_doc = await axios.post(options.link + 'update/test/document', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
			// doc1: this.state.doc,
		})
		console.log(result_doc.data.review)
		this.setState({
			doc: result_doc.data.test_data !== undefined ? result_doc.data.test_data : '',
		})
		if (result_doc.data.review !== 'none') {
			this.setState({ sentReview: true })
			console.log('hello dear')
		}
	}
	onTextCallback(text) {
		this.setState({ text: text })
	}
	clickrecord() {
		this.setState({ recorder: !this.state.recorder })
	}
	addText() {
		let doc = this.state.doc
		let text = this.state.text
		doc += '\n' + text
		this.setState({ doc: doc })
	}
	copy() {
		navigator.clipboard.writeText(this.state.text)
	}
	lec6() {
		this.setState({ lec: 6 })
	}
	lec7() {
		this.setState({ lec: 7 })
	}
	getCourse(course) {}
	async save() {
		let result = await axios.post(options.link + 'update/test/document', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
		})
		if (result.status === 200) alert('saved')
	}
	async saveA() {
		console.log('called')
		let result = await axios.post(options.link + 'update/test/approve', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
		})
		console.log(result)

		// if (result.status === 200) alert('saved')
	}
	async saveinit() {
		let result = await axios.post(options.link + 'update/test/document', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
		})
		if (result.status === 200) console.log('saved')
	}
	Noaudio() {
		alert('Please Check Audio Submissionn')
	}
	approval() {
		// if (this.state.audio === false) {
		// 	alert('Please Check Audio Submissionn')
		// 	return
		// }
		this.setState({ approval: 'approved' })
		// console.log(this.state.approval)
		alert('Saved, and sent for approval')
		localStorage.setItem('approval', 'approved')
		this.setState({ localApprove: localStorage.getItem('approval') })
	}
	sunhandleChange(content) {
		// console.log(content)
		this.setState({ doc: content })
	}
	render() {
		return (
			<>
				<div
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						zIndex: 3,
						backgroundColor: '#cddc30',
					}}
					className=''
				>
					{/* <Microphone
						elem={this.state.email}
						_id={this.state.result._id}
					></Microphone> */}
				</div>
				<div className='App'>
					<br />
					Hello,
					<span className='highlight email'> {this.state.first}</span>
					<br />
					Translating from <span className='highlight'>English</span> to
					<span className='highlight'> {this.state.language}</span>
					<br />
					{this.state.course === 'MECHANICAL ENGINEERING' ? (
						<div className='dropBUTTON'>
							<br />

							<div class='dropdown'>
								<button class='dropbtn'>Lecture</button>
								<div class='dropdown-content'>
									<a>LEC 6</a>
									<a href={'lec7/?usere=' + this.state.first}>LEC 7</a>
								</div>
							</div>
						</div>
					) : (
						''
					)}
					<a href='https://free.aicte-india.org/video/index.php'>
						<div className='button buttonLogOut'>LogOut</div>
					</a>
					<a href='https://youtu.be/2fwqZGxH0d8'>
						<button
							style={{
								// position: 'fixed',
								padding: '10px ',
								width: '23%',
								backgroundColor: '#f94144',
								color: 'white',
								borderRadius: '3px',
								fontWeight: '700',
							}}
							className='save saveMain buttonnoborder buttoninstructions'
						>
							Instructions for translations portal{' '}
						</button>
					</a>
					<br />
					<br />
					<div className='outer'>
						{/* <strong>{this.state.course}</strong>
						<br />
						<strong>{this.state.courseName}</strong> */}
						<div className='row'>
							<div className='left'>
								{this.state.course === 'COMPUTER SCIENCE AND ENGINEERING' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21582&amp;authkey=AH4aKTBC5u8J0_U&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
							</div>
							{/* {this.state.approval}
							{this.state.localApprove} */}
							<div className='right'>
								<div className='output'>
									<span className='title'></span>
									<div className='speechtotext'>
										<div className='PreviewData'>
											<div className='result-container'>
												<div className='stt'>
													<ReactSpeech
														className='miconmain'
														lang={this.state.lang}
														onText={(text) => this.onTextCallback(text)}
													/>
													<button className='clickonMain' onClick={() => this.copy()}>
														Copy
													</button>
												</div>
												<br />
												<br />
												<br />
												<span className='textmain'>{this.state.text}</span>

												<p
													className='lead'
													style={{
														fontSize: '1.5rem',
													}}
												></p>
												{/* <button
													onClick={() =>
														this.addText()
													}
												>
													Add
												</button> */}

												<br />
												<br />
											</div>
										</div>
									</div>
									<span className='title'>Output:</span>
									<br />
									{/* <textarea
										className='outputtext'
										name='outputtext'
										id=''
										cols='30'
										rows='10'
										value={this.state.doc}
										onChange={(e) =>
											this.setState({
												doc: e.target.value,
											})
										}
									></textarea> */}
									<SunEditor
										setContents={this.state.doc}
										disable={this.state.sentReview}
										setOptions={{
											katex: katex,
											buttonList: [
												['undo', 'redo'],
												['math'],
												// ['image'],
												// ['codeView'],
											],
										}}
										// onChange={(e) => {
										// 	let arr = this.state.arr
										// 	this.setState({ arr: arr })
										// }}
										// TODO
										// 	value={elem.convert}
										// 	onChange={(e) => {
										// 	  let arr = this.state.arr;
										// 	  arr[elem.index].convert = e.target.value;
										// 	  this.setState({ arr: arr });
										//   }}
										height='70vh'
										className='converted-editable'
										style={{
											width: 'calc(100% - 40px)',
											minHeight: '150px',
											padding: '20px',
											fontSize: '1.4rem',
										}}
										onChange={this.sunhandleChange}
										value={this.state.doc}
									/>

									<div className='recordbutton'>
										<button
											style={{
												// position: 'fixed',
												padding: '10px ',
												width: '43%',
												height: '50px',
												backgroundColor: '#3772ff',
												color: 'white',
												borderRadius: '3px',
												fontWeight: '700',
											}}
											className='recordbuttonbutton buttonnoborder'
											onClick={this.clickrecord}
										>
											{this.state.sentReview === false ? <>Record Audio Transcript</> : <> Audio Transcript </>}
										</button>
									</div>
									{this.state.recorder === true ? (
										<>
											<div className='record'>
												<div
													style={{
														// position: 'absolute',
														// top: 0,
														// right: "50%",
														// transform:"translatey(50%)",
														// zIndex: 3,
														// width:"40vw",
														backgroundColor: '#3772ff',
														fontWeight: 700,
														color: 'white',
													}}
													className='recorder'
												>
													<Microphone
														set_audio_to_true={this.set_audio_to_true}
														className='recorder'
														sent={this.state.sentReview}
														elem={this.state.email}
														_id={this.state.result._id}
													></Microphone>
												</div>
											</div>
										</>
									) : (
										''
									)}

									{this.state.sentReview === true ? (
										<></>
									) : (
										<>
											<div className='buttonset'>
												<button
													style={{
														// position: 'fixed',
														padding: '10px ',
														width: '43%',
														backgroundColor: '#2ec4b6',
														color: 'white',
														borderRadius: '3px',
														fontWeight: '700',
													}}
													className='save saveMain buttonnoborder'
													onClick={() => {
														this.save()
													}}
												>
													Save As Draft
												</button>
												{this.state.audio === true ? (
													<>
														<a
															onClick={() => {
																this.saveA()
																this.approval()
															}}
															// href='./Thankyou'
															// onClick={() => {
															// 	this.save()
															// 	this.approval()
															// }}
															className='save saveMain buttonnoborder'
														>
															<button
																style={{
																	// position: 'fixed',
																	padding: '10px ',
																	width: '43%',
																	backgroundColor: '#00695c',
																	color: 'white',
																	borderRadius: '3px',
																	fontWeight: '700',
																}}
																className='button save saveMain buttonnoborder'
															>
																Save & Send for approval
															</button>
														</a>
													</>
												) : (
													<a
														href='#0'
														onClick={() => {
															// this.save()
															this.Noaudio()
														}}
														className=''
													>
														<button
															style={{
																// position: 'fixed',
																padding: '10px ',
																width: '43%',
																backgroundColor: '#00695c',
																color: 'white',
																borderRadius: '3px',
																fontWeight: '700',
															}}
															className='button save saveMain buttonnoborder'
														>
															Save & Send for approval
														</button>{' '}
													</a>
												)}
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
