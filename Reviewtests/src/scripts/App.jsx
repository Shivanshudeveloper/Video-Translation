import React from 'react'
import '../styles/App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main.jsx'
const App = () => {
	return (
		<>
			<Router>
				<Route path="/React" component={Main} />
			</Router>
		</>
	)
}

export default App
