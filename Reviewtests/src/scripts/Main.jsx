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
						<div className='row'>
							<div className='left'>
								{this.state.course ===
								'COMPUTER SCIENCE AND ENGINEERING' ? (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vQA8pFSKdg2v3cXOK7HleyIz9BeQ0RaEliXipLuz282Mx3VgYMf7tkSGU_Z01yEQA/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTriIxk3FFqNTs2hwe41jRzNGlDWOk3kD_y4vjCdcIrJsC3idj4A7WZf019Koocqg/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vSovmMHjRPbI6xvU4ll98N66LDot_lcZ8MR9sJt56vmI3YUmWwtHoqi3RniOW85fw/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vSNPA3yjL0YQNbE8iLQLTwNiPYcuqM0PYhSypQ8u2dnYWpiEDq2uwALBW0DGYCDyw/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTAAG1x6XiagKd8JDLMEJ6cABcISFoIiMjIoNLPnWOGQsG_qmobzlAVOLeKm5CtYA/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vSBrv63dBjwX7ivz0wpcvfsyHh8Q5yIYFpzhnnlHjkXKPTRGKVfEBR4LNuftcMlFw/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vQDukikdYgBx-ILVCO-CJdeMwxGaAkJJ0usstHVueHqpE86Yf_ILhg3TFH6Urp27g/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTu49Hec_9dXuG-jaesZjN6ALwrasCzZ9mQi4qIpGEVsX1atS4zOeACLMYNP_bmXQ/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vR6owBnPk3cbwQ7Bd7BeIe80bokUkK3vWTy2qLL1L65nNs91zGycdpsHKh-3ZFS9g/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vTJzT-8PnlNGEMqeoKWugzhENA1NJqHCJaBqTs7PCVphYTSZZMtcbAvE2QA3MrwTg/pub?embedded=true'
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
											src='https://docs.google.com/document/d/e/2PACX-1vQRpmi1ycnShaRiskPv_YCOJ7oB4G7iy3OKyoiNG-DC2d9vivlu1rop9iMqXDa2Bg/pub?embedded=true'
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
												['image'],
												['codeView'],
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
											className="recorder"
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
