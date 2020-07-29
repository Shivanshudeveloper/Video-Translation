import React, { Component } from 'react'
import ReactSpeech from './lib'
import options from './config'
import qs from 'query-string'
import axios from 'axios'
export default class Main extends Component {
	state = { lang: 'hi-IN', email: '', text: '', doc: '' }
	componentDidMount() {
		const { email } = qs.parse(this.props.location.search)
		this.setState({ email: email }, () => this.get_data())
		// sessionStorage.setItem('email', email)
		// this.get_data()
	}
	async get_data() {
		const result = await axios.post(options.link + 'auth/login', {
			email: this.state.email,
			password: 'password',
		})
		this.setState(
			{ result: result.data, lang: options.lang[result.data.language] },
			() => console.log(this.state)
		)
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
	render() {
		return (
			<>
				<div className='App'>
					<div className='outer'>
						<div className='row'>
							<div className='left'>
								
								
								<iframe
									title='originalDoc'
									className='documentOriginal'
									src='https://docs.google.com/document/d/e/2PACX-1vTAoIm1bi0xeRKm5HTc6jw97smLenGjApOjafHdUJ2XiXCzx92TwafT8w_IomYi-g/pub?embedded=true'
								></iframe>


							</div>
							<div className='right'>
								<div className='output'>
									<span className='title'>
										Preview: {this.state.email}{' '}
									</span>
									<div className='speechtotext'>
										<td className='PreviewData'>
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
										</td>
									</div>
									<span className='title'>Output:</span>
									<textarea
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
									></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
