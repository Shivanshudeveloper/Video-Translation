import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import ReactSpeech from './lib'
import options from './config'

const Main = ({ location }) => {
	let [userEmail, setUserEmail] = useState('')
	let [userData, setUserData] = useState('')
	let [Doc, setDoc] = useState('')

	// Make the use of Hooks State Variables
	const [course, setCourse] = useState('')
	const [language, setLanguage] = useState('')
	const [token, setToken] = useState('')
	// --------------------------------------

	useEffect(() => {
		const { usere } = queryString.parse(location.search)
		setUserEmail(usere)
		sessionStorage.setItem('userEmail', usere)

		async function execute() {
			let data = await get_data()
			setUserData()
		}

		execute()
	}, [])

	async function get_data() {
		const result = await axios.post(options.link + 'auth/login', {
			email: sessionStorage.getItem('userEmail'),
			password: 'password',
		})
		console.log(result.data)
		sessionStorage.setItem('course', JSON.stringify(result.data.course))
		sessionStorage.setItem('language', result.data.language)
		sessionStorage.setItem('token', result.data.token)

		// Make the use of State Variables i.e. course, language, token
		setCourse(JSON.stringify(result.data.course.discipline))
		setLanguage(result.data.language)
		setToken(result.data.token)
		console.log(result.data.course.discipline);
		const more_data = await axios.post(
			options.link + 'update/test/document',
			{
				auth: {
					email: sessionStorage.getItem('userEmail'),
					token: result.data.token,
				},
				doc: '',
			}
		)
		return { doc_data: more_data, user_data: result.data }
	}

	async function save(data) {
		const more_data = await axios.post(
			options.link + 'update/test/document',
			{
				auth: {
					email: sessionStorage.getItem('userEmail'),
					token: sessionStorage.getItem('token'),
				},
				// get data from state or from data variable
				doc: 'iohdqfioewf qwuefh qe',
			}
		)
	}

	return (
		<div className='App'>
			<div className='outer'>
				<div className='row'>
					<div className='left'>
						{course}
						


						{(() => {
							if (course === '"COMPUTER SCIENCE AND ENGINEERING"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vQA8pFSKdg2v3cXOK7HleyIz9BeQ0RaEliXipLuz282Mx3VgYMf7tkSGU_Z01yEQA/pub?embedded=true'
										></iframe>
									</>
								)
							}

							if (course === '"Multidisciplinary"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vTriIxk3FFqNTs2hwe41jRzNGlDWOk3kD_y4vjCdcIrJsC3idj4A7WZf019Koocqg/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (
								course ===
								'"MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE"'
							) {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vSovmMHjRPbI6xvU4ll98N66LDot_lcZ8MR9sJt56vmI3YUmWwtHoqi3RniOW85fw/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"BASIC SCIENCE"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vSNPA3yjL0YQNbE8iLQLTwNiPYcuqM0PYhSypQ8u2dnYWpiEDq2uwALBW0DGYCDyw/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"BIOTECHNOLOGY"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vTAAG1x6XiagKd8JDLMEJ6cABcISFoIiMjIoNLPnWOGQsG_qmobzlAVOLeKm5CtYA/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"HUMANITIES"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vSBrv63dBjwX7ivz0wpcvfsyHh8Q5yIYFpzhnnlHjkXKPTRGKVfEBR4LNuftcMlFw/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"MECHANICAL ENGINEERING"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vQDukikdYgBx-ILVCO-CJdeMwxGaAkJJ0usstHVueHqpE86Yf_ILhg3TFH6Urp27g/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"CHEMICAL ENGINEERING"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vTu49Hec_9dXuG-jaesZjN6ALwrasCzZ9mQi4qIpGEVsX1atS4zOeACLMYNP_bmXQ/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"ELECTRICAL ENGINEERING"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vR6owBnPk3cbwQ7Bd7BeIe80bokUkK3vWTy2qLL1L65nNs91zGycdpsHKh-3ZFS9g/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (
								course ===
								'"ELECTRONICS AND COMMUNICATION ENGINEERING"'
							) {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vTJzT-8PnlNGEMqeoKWugzhENA1NJqHCJaBqTs7PCVphYTSZZMtcbAvE2QA3MrwTg/pub?embedded=true'
										></iframe>
									</>
								)
							}
							if (course === '"CIVIL ENGINEERING"') {
								return (
									<>
										<iframe
											title='originalDoc'
											className='documentOriginal'
											src='https://docs.google.com/document/d/e/2PACX-1vQRpmi1ycnShaRiskPv_YCOJ7oB4G7iy3OKyoiNG-DC2d9vivlu1rop9iMqXDa2Bg/pub?embedded=true'
										></iframe>
									</>
								)
							}
						})()}
					</div>
					<div className='right'>
						<div className='output'>
							<span className='title'>Preview: {userEmail} </span>
							<div className='speechtotext'>
								<td className='PreviewData'>
									<div className='result-container'>
										<span className='titlePreview'>
											Preview:
										</span>
										<p
											className='lead'
											style={{ fontSize: '1.5rem' }}
										></p>

										<button>Add</button>
										<br />
										<br />
										<ReactSpeech lang='hi-IN' />
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
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
