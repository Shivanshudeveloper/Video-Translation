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
		this.clickrecord = this.clickrecord.bind(this)
		this.set_audio_to_true = this.set_audio_to_true.bind(this)
	}
	state = {
		lang: 'hi-IN',
		email: '',
		text: '',
		doc: '',
		course: '',
		first: ' ',
		result: { _id: '' },
		approval: 'Progress',
		localApprove: 'hello',
		language: '',
		courseName: '',
		recorder: false,
		audio: false,
	}

	componentDidMount() {
		const { usere } = qs.parse(this.props.location.search)
		this.setState({ email: usere }, () => {
			this.get_data()
			this.forceUpdate()
		})
	}
	set_audio_to_true() {
		this.setState({ audio: true })
	}
	async get_data() {
		const result = await axios.post(options.link + 'auth/login', {
			email: this.state.email,
			password: 'password',
		})
		localStorage.setItem('email', this.state.email)
		localStorage.setItem('auth', result.data.token)
		this.setState({
			result: result.data,
			language: result.data.language,
			course: result.data.course.discipline,
			first: result.data.email,
			courseName: result.data.course.course_name,
			lang: options.lang[result.data.language],
		})
		// console.log(this.state.first)
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
		// console.log(result_doc.data.test_data)
		this.setState({
			doc:
				result_doc.data.test_data !== undefined
					? result_doc.data.test_data
					: '',
		})
		if (this.state.doc === '') {
			console.log(this.state.course)
			if (this.state.course === 'COMPUTER SCIENCE AND ENGINEERING') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering%20hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/lec50%20Programming%20in%20Java%20corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering%20gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering%20bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering-%20telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering-%20tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/COMPUTER%20SCIENCE%20AND%20ENGINEERING/language/computer%20science%20and%20engineering-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'Multidisciplinary') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/For%20Humanites%20lec49%20English%20Language_corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-Gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/Multidisciplinary/language/Multidisciplinary-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (
				this.state.course ===
				'MEATLLURGICAL ENGINEERING AND MATERIAL SCIENCE'
			) {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/lec12%20FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-%20I%20corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MEATLLURGICAL%20ENGINEERING%20AND%20MATERIAL%20SCIENCE/language/FUNDAMENTALS%20OF%20MATERIAL%20PROCESSING%20-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'BASIC SCIENCE') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Basic%20science-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/1.%20For%20Engineering%20lec1%20Introduction%20to%20Electromagnetism_corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-gujrati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BASIC%20SCIENCE/language/Bacis%20science-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'BIOTECHNOLOGY') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/Biotechnology-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/biotechnology-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/lec3%20PLANT%20DEVELOPMENTAL%20BIOLOGY%20CORRECTED.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/Biotechnology-gujrati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/Biotechnology-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/biotechnology-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/biotechnology-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/biotechnology-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/BIOTECHNOLOGY/language/biotechnology_malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'HUMANITIES') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://github.com/Aaryan-kapur/DOCHTML/blob/master/HUMANITIES/language/humanities-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/For%20Humanites%20lec49%20English%20Language_corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/HUMANITIES/language/humanities-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'MECHANICAL ENGINEERING') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/lec2%20APPLIED%20THERMODYNAMICS%20FOR%20ENGINEERS%20corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/MECHANICAL%20ENGINEERING/language/mechanical%20engineering-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'CHEMICAL ENGINEERING') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/2.For%20Engineering%20lec2%20Fluid%20Mechanics_corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20-%20gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20-%20bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CHEMICAL%20ENGINEERING/language/chemical%20engineering%20-%20malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'ELECTRICAL ENGINEERING') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/lec3%20BASIC%20ELECTRIC%20CIRCUITS%20corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-%20gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-%20bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering%20kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRICAL%20ENGINEERING/language/electrical%20engineering%20malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (
				this.state.course ===
				'ELECTRONICS AND COMMUNICATION ENGINEERING'
			) {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/lec5%20POWER%20ELECTRONICS%20%20corrected.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-gujarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/ELECTRONICS%20AND%20COMMUNICATION%20ENGINEERING/language/electronics%20and%20communication%20engineering-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
			if (this.state.course === 'CIVIL ENGINEERING') {
				if (this.state.language === 'Hindi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-hindi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Marathi') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-%20marathi.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'English') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/lec48%20MECHANICS%20OF%20SOLIDS%20CORRECTED.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Gujurati') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-guarati.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Bengali') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-bengali.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Telugu') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-telugu.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Tamil') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-tamil.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Kannada') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-kannada.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
				if (this.state.language === 'Malayalam') {
					axios
						.get(
							'https://raw.githubusercontent.com/Aaryan-kapur/DOCHTML/master/CIVIL%20ENGINEERING/language/civil%20engineering-malayalam.htm'
						)
						.then((data) => {
							this.setState({ doc: data.data })
							this.saveinit()
						})
				}
			}
		}
	}
	onTextCallback(text) {
		this.setState({ text: text })
	}
	clickrecord() {
		this.setState({ recorder: !this.state.recorder })
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
	async saveA() {
		let result = await axios.post(options.link + 'update/test/document', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
		})
		// if (result.status === 200) alert('saved')
	}
	async saveinit() {
		let result = await axios.post(options.link + 'update/test/document', {
			auth: {
				email: localStorage.getItem('email'),
				token: localStorage.getItem('auth'),
			},
			doc: this.state.doc,
		})
		if (result.status === 200) console.log('saved')
	}
	approval() {
		if (this.state.audio === false) {
			alert('Please submit audio.')
			return
		}
		this.setState({ approval: 'approved' })
		// console.log(this.state.approval)
		alert('Sent for approval')
		localStorage.setItem('approval', 'approved')
		this.setState({ localApprove: localStorage.getItem('approval') })
	}
	sunhandleChange(content) {
		// console.log(content)
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
					<br />
					Hello,
					<span className='highlight email'> {this.state.first}</span>
					<br />
					Translating from <span className='highlight'>
						English
					</span>{' '}
					to
					<span className='highlight'> {this.state.language}</span>
					<br />
					<a href='https://free.aicte-india.org/video/index.php'>
						<div className='button buttonLogOut'>LogOut</div>
					</a>
					<button
						style={{
							// position: 'fixed',
							padding: '10px ',
							width: '23%',
							backgroundColor: '#f94144',
							color: 'white',
							borderRadius: '3px',
							fontWeight: '700',
						}}
						className='save saveMain buttonnoborder buttoninstructions'
					>
						Instructions for translations portal{' '}
					</button>
					<br />
					<br />
					<div className='outer'>
						{/* <strong>{this.state.course}</strong>
						<br />
						<strong>{this.state.courseName}</strong> */}
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
							{/* {this.state.approval}
							{this.state.localApprove} */}
							<div className='right'>
								<div className='output'>
									<span className='title'></span>
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
												// ['image'],
												// ['codeView'],
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
										height='70vh'
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

									<div className='recordbutton'>
										<button
											style={{
												// position: 'fixed',
												padding: '10px ',
												width: '43%',
												height: '50px',
												backgroundColor: '#3772ff',
												color: 'white',
												borderRadius: '3px',
												fontWeight: '700',
											}}
											className='recordbuttonbutton buttonnoborder'
											onClick={this.clickrecord}
										>
											Record Audio Transcript
										</button>
									</div>
									{this.state.recorder === true ? (
										<>
											<div className='record'>
												<div
													style={{
														// position: 'absolute',
														// top: 0,
														// right: "50%",
														// transform:"translatey(50%)",
														// zIndex: 3,
														// width:"40vw",
														backgroundColor:
															'#3772ff',
														fontWeight: 700,
														color: 'white',
													}}
													className='recorder'
												>
													<Microphone
														set_audio_to_true={
															this
																.set_audio_to_true
														}
														className='recorder'
														elem={this.state.email}
														_id={
															this.state.result
																._id
														}
													></Microphone>
												</div>
											</div>
										</>
									) : (
										''
									)}
									<div className='buttonset'>
										<button
											style={{
												// position: 'fixed',
												padding: '10px ',
												width: '43%',
												backgroundColor: '#2ec4b6',
												color: 'white',
												borderRadius: '3px',
												fontWeight: '700',
											}}
											className='save saveMain buttonnoborder'
											onClick={() => {
												this.save()
											}}
										>
											Save As Draft
										</button>

										{this.state.audio === true ? (
											<>
												<a
													onClick={() => {
														this.saveA()
														this.approval()
													}}
													href='./Thankyou'
													// onClick={() => {
													// 	this.save()
													// 	this.approval()
													// }}
													className='save saveMain buttonnoborder'
												>
													<button
														style={{
															// position: 'fixed',
															padding: '10px ',
															width: '43%',
															backgroundColor:
																'#00695c',
															color: 'white',
															borderRadius: '3px',
															fontWeight: '700',
														}}
														className='button save saveMain buttonnoborder'
													>
														Save & Send for approval
													</button>
												</a>
											</>
										) : (
											<a
												onClick={() => {
													// this.save()
													this.approval()
												}}
												className=''
											>
												<button
													style={{
														// position: 'fixed',
														padding: '10px ',
														width: '43%',
														backgroundColor:
															'#00695c',
														color: 'white',
														borderRadius: '3px',
														fontWeight: '700',
													}}
													className='button save saveMain buttonnoborder'
												>
													Save & Send for approval
												</button>{' '}
											</a>
										)}
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
