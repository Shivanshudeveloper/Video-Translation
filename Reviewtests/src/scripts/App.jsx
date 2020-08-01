import React from 'react'
import '../styles/App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main.jsx'
import Thankyou from './Thankyou.jsx'

import Table from './Table'
const App = () => {
	return (
		<>
			{/* /React won't apply on deploy builds, Needs to be added as a basename for routing. */}
			<Router basename='app'>
				<Switch>
					<Route path='/' component={Main} exact />
					<Route path='/table' component={Table} />
					<Route path='/thankyou' component={Thankyou} />
				</Switch>
			</Router>
		</>
	)
}

export default App
