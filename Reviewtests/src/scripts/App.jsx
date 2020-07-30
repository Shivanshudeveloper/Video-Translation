import React from 'react'
import '../styles/App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main.jsx'
import Thankyou from './Thankyou.jsx'
const App = () => {
	return (
		<>
			<Router>
				<Route path="/React" component={Main} />
				<Route path="/Thankyou" component={Thankyou} />
			</Router>
		</>
	)
}

export default App
