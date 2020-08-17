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
	}
	state = {
		lang: 'hi-IN',
		email: '',
		text: '',
		doc: '',
		course: '',
		result: { _id: '' },
		approval: 'Progress',
		localApprove: 'hello',
		language: '',
		courseName:""
	}
	componentDidMount() {
		const { usere } = qs.parse(this.props.location.search)
		this.setState({ email: usere }, () => {
			this.get_data()
			this.forceUpdate()
		})
	}
	async get_data() {
		const result = await axios.post(options.link + 'auth/login', {
			email: this.state.email,
			password: 'password',
		})

		localStorage.setItem('email', this.state.email)
		localStorage.setItem('auth', result.data.token)

		this.setState(
			{
				result: result.data,
				language: result.data.language,
				course: result.data.course.discipline,
				courseName: result.data.course.course_name,
				lang: options.lang[result.data.language],
			}
			// () => console.log(this.state.result)
		)
		let result_doc = await axios.post(
			options.link + 'update/test/document',
			{
				auth: {
					email: localStorage.getItem('email'),
					token: localStorage.getItem('auth'),
				},
				doc: this.state.doc,
			}
		)
		// console.log(result_doc.data.test_data)
		this.setState({
			doc:
				result_doc.data.test_data !== undefined
					? result_doc.data.test_data
					: '',
		})
		if (this.state.doc === '') {
			console.log(this.state.course)
			if (this.state.course === 'COMPUTER SCIENCE AND ENGINEERING') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/lec50%20Programming%20in%20Java%20corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'Multidisciplinary') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/For%20Humanites%20lec49%20English%20Language_corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (
				this.state.course ===
				'MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE'
			) {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/lec12%20FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-%20I%20corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'BASIC SCIENCE') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/index.html'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'BIOTECHNOLOGY') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/lec3%20PLANT%20DEVELOPMENTAL%20BIOLOGY%20CORRECTED.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'HUMANITIES') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/For%20Humanites%20lec49%20English%20Language_corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'MECHANICAL ENGINEERING') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/lec2%20APPLIED%20THERMODYNAMICS%20FOR%20ENGINEERS%20corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'CHEMICAL ENGINEERING') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/2.For%20Engineering%20lec2%20Fluid%20Mechanics_corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'ELECTRICAL ENGINEERING') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/lec3%20BASIC%20ELECTRIC%20CIRCUITS%20corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (
				this.state.course ===
				'ELECTRONICS AND COMMUNICATION ENGINEERING'
			) {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/lec5%20POWER%20ELECTRONICS%20%20corrected.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
			if (this.state.course === 'CIVIL ENGINEERING') {
				axios
					.get(
						'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/lec48%20MECHANICS%20OF%20SOLIDS%20CORRECTED.htm'
					)
					.then((data) => {
						this.setState({ doc: data.data })
						this.saveinit()
					})
			}
		}
	}
	onTextCallback(text) {
		this.setState({ text: text })
	}
	addText() {
		let doc = this.state.doc
		let text = this.state.text

		doc += '\n' + text

		this.setState({ doc: doc })
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
	approval() {
		this.setState({ approval: 'approved' })
		console.log(this.state.approval)
		alert('Sent for approval')
		localStorage.setItem('approval', 'approved')
		this.setState({ localApprove: localStorage.getItem('approval') })
	}
	sunhandleChange(content) {
		console.log(content)
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
					{/* edit */}
					<a href='https://free.aicte-india.org/video/index.php'>
						<div className='button buttonLogOut'>LogOut</div>
					</a>
					<div className='outer'>
						<strong>
							
							{this.state.course}
							</strong>
						<br />
						<strong>
							
						{this.state.courseName}
						</strong>
						<br />
						<strong>
						Translating from English to {this.state.language}
						</strong>
						<div className='row'>
							<div className='left'>
								{this.state.course ===
								'COMPUTER SCIENCE AND ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1D2D9WLCvrZJb3FFATVa1faPUa-KF51Nh/preview'
										></iframe>
									</>
								) : (
									''
								)}

								{this.state.course === 'Multidisciplinary' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1uEc-Gvi7XR-vi0wzjL-RgIuUvzSgxMha/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1Q74AGIWsWRJ-T9UqwvMnLnYDxFYLPKLX/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'BASIC SCIENCE' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1qp6AP0AdiMDfTmzdGApcXukrqlcyoyks/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'BIOTECHNOLOGY' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1V2XGMTq5kGklm9Bzacyjv45AuThi6IEn/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'HUMANITIES' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1xqQRYex_Pz3PepkcluJRrCjRAj0OWcXv/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'MECHANICAL ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1s3LVOPIeEZOiwOKSKMUGvYRrfCPHNBDP/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'CHEMICAL ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1BNDondg7-Of8tmdeamMGCVdOv-WwXh9o/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'ELECTRICAL ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1LhxEYBmcVk1nHSCmDntu66xaSK2Kigs2/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'ELECTRONICS AND COMMUNICATION ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/1Ls_VbFeD8bG5Hhzuts_uCbIUUYcbO9ET/preview'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'CIVIL ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://drive.google.com/file/d/160h2mxcjlKHwW1YMIjqLQwcoHB5Oh7Y2/preview'
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
									<span className='title'>
										Preview: {this.state.email}{' '}
									</span>
									<div className='speechtotext'>
										<div className='PreviewData'>
											<div className='result-container'>
												<span className='titlePreview'>
													Preview:{this.state.text}
												</span>
												<p
													className='lead'
													style={{
														fontSize: '1.5rem',
													}}
												></p>

												<button
													onClick={() =>
														this.addText()
													}
												>
													Add
												</button>
												<br />
												<br />
												<ReactSpeech
													lang={this.state.lang}
													onText={(text) =>
														this.onTextCallback(
															text
														)
													}
												/>
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
										enable={!this.state.review}
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
										height='80vh'
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
									<div className='record'>
										<div
											style={{
												// position: 'absolute',
												// top: 0,
												// right: "50%",
												// transform:"translatey(50%)",
												// zIndex: 3,
												// width:"40vw",
												backgroundColor: '#cddc30',
											}}
											className='recorder'
										>
											<Microphone
												className='recorder'
												elem={this.state.email}
												_id={this.state.result._id}
											></Microphone>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								position: 'fixed',
								padding: '10px ',
								width: '43%',
								backgroundColor: 'green',
								color: 'white',
								borderRadius: '3px',
								fontWeight: '500',
							}}
							className='save saveMain'
							onClick={() => {
								this.save()
							}}
						>
							Save
						</div>
						<div className='reviewexitbutton'>
							<a
								href='./Thankyou'
								onClick={() => {
									this.save()
								}}
							>
								<div
									style={{
										position: 'fixed',
										padding: '10px ',
										width: '43%',
										backgroundColor: 'red',
										color: 'white',
										borderRadius: '3px',
										fontWeight: '500',
									}}
									onClick={() => {
										this.save()
										this.approval()
									}}
									className='save saveMain'
								>
									Save & Send for approval
								</div>
							</a>
						</div>
					</div>
				</div>
			</>
		)
	}
}
