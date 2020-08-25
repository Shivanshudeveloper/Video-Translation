import React, { Component } from 'react'

import qs from 'query-string'

import options from './config'
import axios from 'axios'

import '../styles/Table.scss'

export default class Table extends Component {
	state = {
		data: [],
		arr: [],
		parsed: { qty: 10, page: 1 },
		discipline: [],
		courses: ['Selected Course'],
		language: [
			'Select Language',
			'Hindi',
			'Telugu',
			'Kannada',
			'Marathi',
			'Gujarati',
			'Tamil',
			'Bengali',
		],
		lang: undefined,
		course: undefined,
		statusDoc: 'Under Review',
	}
	async componentDidMount() {
		let parsed = qs.parse(this.props.location.search)
		if (!parsed.page) {
			parsed.page = 1
		}
		if (!parsed.qty) {
			parsed.qty = 10
		}
		if (parsed.lang && parsed.lang !== 'undefined') {
			this.setState({ lang: parsed.lang })
		}
		if (parsed.course && parsed.course !== 'undefined') {
			this.setState({ course: parsed.course.toUpperCase() })
		}

		this.setState({ parsed: parsed }, async () => {
			console.log(parsed)

			let result = await axios.post(options.link + 'list/all', {
				page: parsed.page,
				qty: parsed.qty,
				lang: this.state.lang,
				course: this.state.course,
			})

			this.setState({
				data: result.data.users,
				pages: result.data.pages,
				courses: ['Selected Course', ...result.data.courses],
			})

			let arr = []

			for (let index = 0; index < result.data.pages; index++) {
				arr.push(index)
			}
			console.log(result,arr)
			this.setState({ arr: arr })
		})
	}

	render() {
		return (
			<React.Fragment>
				{this.state.course ? this.state.course : ''}
				<br />
				{this.state.lang ? this.state.lang : ''}
				<section id='admin'>
					<div className='dropdowns'>
						<div class='dropdown'>
							<select
								class='dropbtn'
								name='Discipline'
								id='Discipline'
								onChange={(e) =>
									this.setState({
										course: e.target.value,
									})
								}
							>
								{this.state.courses.map((elem) => (
									<option value={elem}>{elem}</option>
								))}
							</select>
							<select
								class='dropbtn'
								name='language'
								id='language'
								onChange={(e) =>
									this.setState({ lang: e.target.value })
								}
							>
								{this.state.language.map((elem) => (
									<option value={elem}>{elem}</option>
								))}
							</select>{' '}
							<a
								href={
									'./table?qty=' +
									this.state.parsed.qty +
									'&course=' +
									this.state.course +
									'&lang=' +
									this.state.lang +
									'&page=' +
									this.state.parsed.page
								}
							>
								Go
							</a>
						</div>
					</div>
					<br />
					<br />
					<table className='table'>
						<thead>
							<tr className='dataintable'>
								<th>Email</th>
								<th>First</th>
								<th>Last</th>
								<th>Language</th>
								{/* <th className=''>Data</th> */}
								<th>Discipline</th>
								<th>Course</th>
								<th>Status</th>
								<th>Open Document</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((elem) => {
								return (
									<React.Fragment key={elem._id}>
										<tr className='dataintable'>
											<td>{elem.email}</td>
											<td>{elem.first}</td>
											<td>{elem.last}</td>
											<td>{elem.language}</td>
											{/* <td className='dataintable datatable'>
												{elem.test_data}
											</td> */}
											<td>{elem.course_id.discipline}</td>
											<td>
												{elem.course_id.course_name}
											</td>
											<td>{this.state.statusDoc}</td>
											<td>
												<a
													href={
														'./review?usere=' +
														elem.email
													}
												>
													Open
												</a>
											</td>
										</tr>
									</React.Fragment>
								)
							})}
						</tbody>
					</table>
				</section>
				<br />
				<br /> <br />
				<br />
				Pages:{' '}
				<span className='pages'>
					{this.state.arr.map((num) => (
						<a
							key={num}
							href={`?page=${num + 1}&qty=${
								this.state.parsed.qty
							}`}
						>
							{num + 1}
						</a>
					))}
				</span>
				<br />
				Number on a page:
				<span className='pages'>
					<a href={`?qty=10&page=${this.state.parsed.page}`}>
						<button className='button'>10</button>{' '}
					</a>
					<a href={`?qty=50&page=${this.state.parsed.page}`}>
						{' '}
						<button className='button'>50</button>{' '}
					</a>
					<a href={`?qty=100&page=${this.state.parsed.page}`}>
						{' '}
						<button className='button'>100</button>{' '}
					</a>
				</span>
				<br />
			</React.Fragment>
		)
	}
}
