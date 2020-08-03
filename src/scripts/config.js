const env = 'testing'

let options = {}

if (env === 'testing') {
	options.link = 'http://localhost:8080/api/'
} else {
	options.link = 'https://translation.aicte-india.org/api/'
}

options.lang = {
	'Hindi': 'hi-IN',
	'Marathi': 'mr-IN',
	'English': 'en-IN',
	'Gujurati': 'gu-IN',
	'Telugu': 'te-IN',
	'Tamil': 'ta-IN',
	'Kannada': 'kn-IN',
}

export default options
