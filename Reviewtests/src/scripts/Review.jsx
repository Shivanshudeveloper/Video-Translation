import React, { Component } from 'react'
import ReactSpeech from './lib'
import options from './config'
import qs from 'query-string'
import axios from 'axios'
import MicrophoneReview from './MicrophoneReview'
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
		status: 'Under Review',
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
				course: result.data.course.discipline,
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
		this.setState({ doc: result_doc.data.test_data })

		console.log('adfsd', this.state)
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
	copy() {
		navigator.clipboard.writeText(this.state.text)
	}
	sunhandleChange(content) {
		// console.log(content)
		this.setState({ doc: content })
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
		if (result.status === 200) alert('saved and Approved')
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
					{/* <MicrophoneReview
						elem={this.state.email}
						_id={this.state.result._id}
					></MicrophoneReview> */}
				</div>
				<div className='App'>
					{/* edit */}
					<a href='./table'>
						<div className='button buttonLogOut'>Dashboard</div>
					</a>
					<div className='outer'>
						<div className='row'>
						<div className='left'>
								{this.state.course ===
								'COMPUTER SCIENCE AND ENGINEERING' ? (
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

								{this.state.course === 'Multidisciplinary' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21639&amp;authkey=AC-lG1asuXrYJbg&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21621&amp;authkey=AB2F6vcDkC9YXt0&amp;em=2&amp;wdStartOn=1&amp;wdPrint=0&amp;wdEmbedCode=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'BASIC SCIENCE' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21540&amp;authkey=ABfntY9dOY--d6o&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'BIOTECHNOLOGY' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21527&amp;authkey=ADcIuWw4zpvf2j8&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'HUMANITIES' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21612&amp;authkey=AK12qdsJWALTnAU&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'MECHANICAL ENGINEERING' ? (
									<>
										{/* <iframe src='https://docs.google.com/document/d/e/2PACX-1vQN3HgJKBFY5FNimyqyK6Sod01OriyrdSyUuoYtvfkxYWESEfQNZ1OAX9raoet3ww/pub?embedded=true'></iframe>{' '} */}

										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21630&amp;authkey=AL-mAgyUsFu4m4Y&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'CHEMICAL ENGINEERING' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21569&amp;authkey=AButHi-PfEwkvuM&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course ===
								'ELECTRICAL ENGINEERING' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21603&amp;authkey=ACovhg5A3VnMfbg&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
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
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21595&amp;authkey=AJdzhMLa8-2j2AI&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
								{this.state.course === 'CIVIL ENGINEERING' ? (
									<>
										<iframe
											src='https://onedrive.live.com/embed?cid=F8C06DA25257EAEC&amp;resid=F8C06DA25257EAEC%21565&amp;authkey=AAVZe5r2tftFe1A&amp;em=2&amp;wdStartOn=1&amp;wdEmbedCode=0&amp;wdPrint=0'
											title='originalDoc'
											className='documentOriginal'
											frameBorder='0'
										></iframe>
									</>
								) : (
									''
								)}
							</div>
							<div className='right'>
								<div className='output'>
									<div className='speechtotext'>
										<div className='PreviewData'>
											<div className='result-container'>
												<div className='stt'>
													<ReactSpeech
														className='miconmain'
														lang={this.state.lang}
														onText={(text) =>
															this.onTextCallback(
																text
															)
														}
													/>
													<button
														className='clickonMain'
														onClick={() =>
															this.copy()
														}
													>
														Copy
													</button>
												</div>
												<br />
												<br />
												<br />
												<span className='textmain'>
													{this.state.text}
												</span>

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
									<span className='title'>
										Output: {this.state.email}
									</span>
									<br />
									{/* <textarea
										className=' outputtext outputtextReview'
										name='outputtext'
										id=''
										cols='30'
										disabled
										rows='20'
										value={this.state.doc}
										onChange={(e) =>
											this.setState({
												doc: e.target.value,
											})
										}
									></textarea> */}
									<SunEditor
										// showToolbar={false}
										// disable={true}
										setContents={this.state.doc}
										// disable={this.state.review}
										enable={!this.state.review}
										setOptions={{
											katex: katex,
											buttonList: [
												['undo', 'redo'],
												['math'],
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
										onChange={this.sunhandleChange}
										height='75vh'
										className='converted-editable'
										style={{
											width: 'calc(100% - 40px)',
											minHeight: '150px',
											padding: '20px',
											fontSize: '1.4rem',
										}}
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
												color: 'white',
												backgroundColor: '#3772ff',
											}}
											className='recorder'
										>
											<MicrophoneReview
												elem={this.state.email}
												_id={this.state.result._id}
											></MicrophoneReview>
										</div>
									</div>
									{/* {this.state.} */}
									<br />
									<br />
									<br />
									<br />
									<div
										style={{
											// position: 'fixed',
											padding: '10px 0',
											float: 'left',
											width: '50%',
											backgroundColor: 'green',
											color: 'white',
											borderRadius: '3px',
											fontWeight: '500',
											cursor: 'pointer',
										}}
										className='save'
										onClick={async () => {
											console.log(this.state)
											console.log('click')
											const result = await axios.post(
												options.link +
													'approve/' +
													this.state.email
											)
											console.log(result)
											this.save()
										}}
									>
										Approve
									</div>

									<div className='reviewexitbutton'>
										<div
											style={{
												// position: 'fixed',
												padding: '10px 0 ',
												float: 'left',

												width: '50%',
												backgroundColor: 'red',
												color: 'white',
												borderRadius: '3px',
												fontWeight: '500',
											}}
											onClick={async () => {
												const result = await axios.post(
													options.link +
														'reject/' +
														this.state.email
												)
												console.log(result)
												alert(
													'translator has been rejected'
												)
											}}
											className='save'
										>
											Reject
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
