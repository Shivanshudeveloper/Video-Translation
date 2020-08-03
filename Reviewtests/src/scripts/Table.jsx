import React, { Component } from 'react'

import qs from 'query-string'

import options from './config'
import axios from 'axios'

import '../styles/Table.scss'

export default class Table extends Component {
	state = { data: [], arr: [], parsed: { qty: 10, page: 1 }, discipline: [] }
	async componentDidMount() {
		let parsed = qs.parse(this.props.location.search)
		if (!parsed.page) {
			parsed.page = 1
		}
		if (!parsed.qty) {
			parsed.qty = 10
		}

		this.setState({ parsed: parsed })

		let result = await axios.post(options.link + 'list/all', {
			page: parsed.page,
			qty: parsed.qty,
		})

		this.setState({ data: result.data.users, pages: result.data.pages })

		let arr = []

		for (let index = 0; index < result.data.pages; index++) {
			arr.push(index)
		}

		this.setState({ arr: arr })
	}

	render() {
		return (
			<React.Fragment>
				<section id='admin'>
					<div className='dropdowns'>
						<div class='dropdown'>
							<select
								class='dropbtn'
								name='Discipline'
								id='Discipline'
							>
								{this.state.data.map((elem) => (
									<option value={elem.course_id.discipline}>
										{elem.course_id.discipline}
									</option>
								))}
								{/* {this.state.data.map((elem) => {
									<option value={elem.course_id.discipline}>
										{elem.course_id.discipline}
									</option>
								})} */}
							</select>
							<select
								class='dropbtn'
								name='language'
								id='language'
							>
								{this.state.data.map((elem) => (
									<option value={elem.language}>
										{elem.language}
									</option>
								))}
							</select>{' '}
						</div>
					</div>
					<br />
					<br />
					<table className='table'>
						<thead>
							<tr>
								<th>Email</th>
								<th>First</th>

								<th>Last</th>
								<th>Language</th>

								<th>Data</th>

								<th>Discipline</th>
								<th>Course</th>
								<th>Open Document</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((elem) => {
								return (
									<React.Fragment key={elem._id}>
										<tr>
											<td>{elem.email}</td>
											<td>{elem.first}</td>

											<td>{elem.last}</td>
											<td>{elem.language}</td>

											<td>{elem.test_data}</td>

											<td>{elem.course_id.discipline}</td>
											<td>
												{elem.course_id.course_name}
											</td>
											<td>
												<a
													href={
														'http://localhost:3000/app?usere=' +
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
