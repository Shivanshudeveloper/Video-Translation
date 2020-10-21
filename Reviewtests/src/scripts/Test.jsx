import React, { Component, Fragment } from 'react'
// import { Recorder } from 'react-voice-recorder'

import options from './config'
import axios from 'axios'

export default class Test extends Component {
	state = {
		courses: [],
		users: [],
		links: [],
		lang: ['Hindi', 'Marathi', 'English', 'Gujurati', 'Telugu', 'Tamil', 'Kannada', 'Bengali'],
		selected_course: '',
		selected_language: 'Hindi',
		usr: '',
		lec: '',
		allocated: {},
		selection: [],
	}
	async componentDidMount() {
		let allocated = JSON.parse(localStorage.getItem('allocated'))
		if (!allocated) allocated = {}
		this.setState({ allocated })
		let result = await axios.post(options.link + 'get/cleaning_doc_courses', {})
		console.log(result.data)
		this.setState({ courses: result.data })
	}

	async get_data() {
		let result = await axios.post(options.link + 'get/all_users/' + this.state.selected_language, {
			course: this.state.selected_course,
		})
		this.setState({ users: result.data })
		console.log(result.data[0])

		result = await axios.post(options.link + 'get/links', {
			course: this.state.selected_course,
		})

		this.setState({ links: result.data })
		console.log(result.data[0])
	}

	save_allocation() {
		let allocated = this.state.allocated
		// console.log(this.state.lec)
		let lec = allocated[this.state.lec]

		if (lec) {
			allocated[this.state.lec].push(this.state.selection)
			let s = new Set(allocated[this.state.lec].push(this.state.selection))
			allocated[this.state.lec] = Array.from(s)
		} else {
			allocated[this.state.lec] = []
			allocated[this.state.lec].push(this.state.selection)
		}
		console.log(allocated)
		this.setState({ allocated })
		this.setState({ selection: [] })
		localStorage.setItem('allocated', JSON.stringify(allocated))
	}

	render() {
		return (
			<Fragment>
				<div className='diviv'>
					Courses:
					<div className='' style={{}}>
						<div className='flec' style={{ display: 'flex', fontSize: '1.23rem', fontWeight: '700' }}>
							<div className='first' style={{ border: '1px solid black' }}>
								<select
									onChange={(e) => {
										this.setState({ selected_course: e.target.value })
									}}
								>
									{this.state.courses.map((course) => {
										return (
											<option style={{ padding: '10px 0', border: '1px solid black' }} key={course} value={course}>
												{course}
											</option>
										)
									})}
								</select>
							</div>
							<div className='second' style={{ border: '1px solid black' }}>
								<select>
									{this.state.lang.map((lannng) => {
										return (
											<option
												onClick={() => {
													this.setState({ selected_language: lannng })
												}}
												style={{ padding: '10px 0', border: '1px solid black' }}
												key={lannng}
												value={lannng}
											>
												{lannng}
											</option>
										)
									})}
								</select>
							</div>
						</div>
						<p>{this.state.selected_course}</p>
						<p>{this.state.selected_language}</p>
						<button onClick={() => this.get_data()}>GO</button>
						<p>{this.state.usr}</p>
						<p>{this.state.lec}</p>

						<h1>Allocations</h1>
						<div className='flec' style={{ display: 'flex', flexDirection: 'column', fontSize: '1.23rem', fontWeight: '700' }}>
							{Object.keys(this.state.allocated).map((allocation_key) => {
								let result = this.state.links.map((link) => link._id)
								if (result.includes(allocation_key)) {
									// console.log(this.state.allocated[allocation_key].map(elem=>elem))
									let link = this.state.links[result.indexOf(allocation_key)]
									return (
										<Fragment key={allocation_key}>
											<div style={{ display: 'block' }}>
												{link.lectureId}
												<p>{this.state.allocated[allocation_key].join()}</p>
											</div>
											<br />
										</Fragment>
									)
								} else return <Fragment key={allocation_key}></Fragment>
							})}
						</div>
						<h1>Allocate</h1>
						<div className='flec' style={{ display: 'flex', fontSize: '1.23rem', fontWeight: '700' }}>
							<div className='first' style={{ border: '1px solid black' }}>
								{this.state.users.map((user) => {
									return (
										<div
											onClick={() => {
												let selection = this.state.selection
												selection.push(user.first + ' ' + user.last)
												this.setState({ selection })
											}}
											style={
												this.state.selection.includes(user.first + ' ' + user.last)
													? {
															padding: '10px 0',
															border: '1px solid black',
															backgroundColor: 'green',
													  }
													: { padding: '10px 0', border: '1px solid black' }
											}
											key={user._id}
										>
											{user.first + ' ' + user.last}
										</div>
									)
								})}
							</div>
							<div className='second' style={{ border: '1px solid black' }}>
								{this.state.links.map((lannng) => {
									return (
										<div
											onClick={() => {
												console.log(lannng)
												this.setState({ lec: lannng._id }, () => this.save_allocation())
											}}
											style={{ padding: '10px 10px', border: '1px solid black' }}
											key={lannng._id}
										>
											Lecture {lannng.lectureId}
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
