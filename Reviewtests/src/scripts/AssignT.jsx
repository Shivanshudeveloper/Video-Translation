import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import options from './config'

export default class AssignT extends Component {
	state = {
		translators: [],
		courses: [],
		validators: [],
	}
	async componentDidMount() {
		let result = await Axios.get(options.link + 'any/translator')
		this.setState(
			{
				translators: result.data.trans,
				validators: result.data.vals,
				courses: result.data.courses,
			},
			() => {
				console.log(this.state)
			}
		)
	}

	async setN(n, email) {
		let result = Axios.post(options.link + 'any/assign', {
			user: email,
			assign: n,
		})
		window.location.reload()
	}
	render() {
		return (
			<Fragment>
				<h1>Translator</h1>
				<table style={{ border: '1px solid black' }}>
					<tr>
						<th>Name</th>
						<th>Language</th>
						<th>Assigned</th>
						<th>Change?</th>
					</tr>
					{this.state.translators.map((elem) => {
						return (
							<Fragment>
								<tr>
									<td>{elem.first + ' ' + elem.last}</td>
									<td> {elem.language}</td>
									<td> {elem.assign}</td>
									<td>
										{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(6, elem.email)
											}
										>
											6
										</a>
										,{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(7, elem.email)
											}
										>
											7
										</a>
										,{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(8, elem.email)
											}
										>
											8
										</a>
										,
									</td>
								</tr>
							</Fragment>
						)
					})}
				</table>
				<h1>Validators</h1>
				<table style={{ border: '1px solid black' }}>
					<tr>
						<th>Name</th>
						<th>Language</th>
						<th>Assigned</th>
						<th>Change?</th>
					</tr>
					{this.state.validators.map((elem) => {
						return (
							<Fragment>
								<tr>
									<td>{elem.first + ' ' + elem.last}</td>
									<td> {elem.language}</td>
									<td> {elem.assign}</td>
									<td>
										{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(6, elem.email)
											}
										>
											6
										</a>
										,{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(7, elem.email)
											}
										>
											7
										</a>
										,{/* eslint-disable-next-line */}
										<a
											href='#'
											onClick={() =>
												this.setN(8, elem.email)
											}
										>
											8
										</a>
										,
									</td>
								</tr>
							</Fragment>
						)
					})}
				</table>
			</Fragment>
		)
	}
}
