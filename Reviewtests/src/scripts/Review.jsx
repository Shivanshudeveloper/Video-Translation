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
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vSU7iglymqCVC3YV5eHg6lp1ZnMCDORn0D4QLAvi-IG9CAiY6IZlb_G1SLRIk2s6g/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vRbQdvg1yapkMmXCbGjD_YiEVoG9bhV2GJQl7QORNWPd7i5Q8bLS-CEZyA2Qv78iw/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTF40-xAD7GiPzycZXedgPaSRtM3B6GJd5nc-fbjcsg_yO5DFhQfDENYqWXwRnasg/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTmZljvV9A1L20DqaNZLXSjVs5PGDJkUru7mdHJqj_ukPYm5nbemdV4CisshCyKSg/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vSTVQsJW6F2HYWJoR77LQVAwA0L2KjHcKrOw-eELWUkGtF4Wv8X-RmPQWnMDJDeTA/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vQCY5Zg9oXll_eAH6KRVeqPiLlHGpEhavZ2SOvczeR34Vfzv5skxnuPQKbaz5-5Yw/pub?embedded=true'
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
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vQN3HgJKBFY5FNimyqyK6Sod01OriyrdSyUuoYtvfkxYWESEfQNZ1OAX9raoet3ww/pub?embedded=true'
										></iframe>{' '}
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
											src='https://docs.google.com/document/d/e/2PACX-1vRstto7PJtuDwFMiARoXFlrHdkd68hsCi-dn9LYsPKGvGFeUQVH1HeyOGGlKhaOkA/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vRdPNK093zHOKJHrSsQ9xHTcvY9duFrjXqAZi5WUdRDeCl4z5t7ReT3UvwOB37--A/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vQ6asrQudxLmPwUeZ720dwGfAEhS7raMlpOZOR3TuvVnGn8b8XJy0YdFAcqwujXww/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vQuF-OQsSK4UVih5lO15NKcXTkAzajFWuAX6OoYs10hk5wT0usEFTTCu_L2WDWxkQ/pub?embedded=true'
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
												<span className='titlePreview'>
													Preview:{this.state.text}<button
													onClick={() => this.copy()}
												>
													Copy
												</button>
												</span>
												<p
													className='lead'
													style={{
														fontSize: '1.5rem',
													}}
												></p>

												

												
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
											// console.log(result)
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
												// console.log(result)
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
