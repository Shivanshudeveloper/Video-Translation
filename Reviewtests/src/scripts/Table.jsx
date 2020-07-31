import React, { Component } from 'react'

import qs from 'query-string'

import options from './config'
import axios from 'axios'

import '../styles/Table.scss'

export default class Table extends Component {
	state = { data: [], arr: [], parsed: { qty: 10, page: 1 } }
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
					
					<br />
					<br />
					<table className="table">
						<thead>
							<tr>
								<th>created_at</th>
								<th>email</th>
								<th>first</th>

								<th>last</th>
								<th>language</th>

								<th>test_data</th>

								<th>course_id.discipline</th>
								<th>course_id.course_name</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((elem) => {
								return (
									<React.Fragment key={elem._id}>
										<tr>
											<td>{elem.created_at}</td>
											<td>{elem.email}</td>
											<td>{elem.first}</td>

											<td>{elem.last}</td>
											<td>{elem.language}</td>

											<td>{elem.test_data}</td>

											<td>{elem.course_id.discipline}</td>
											<td>
												{elem.course_id.course_name}
											</td>
										</tr>
									</React.Fragment>
								)
							})}
						</tbody>
					</table>
				</section>
				<br />
					<br />	<br />
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
							10
						</a>
						<a href={`?qty=50&page=${this.state.parsed.page}`}>
							50
						</a>
						<a href={`?qty=100&page=${this.state.parsed.page}`}>
							100
						</a>
					</span>
					<br />
			</React.Fragment>
		)
	}
}
