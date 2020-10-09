import React from 'react'
import '../styles/App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main.jsx'
import Thankyou from './Thankyou.jsx'
import Table from './Table.jsx'
import Review from './Review.jsx'
import Test from './Test'
const App = () => {
	return (
		<>
			{/* /React won't apply on deploy builds, Needs to be added as a basename for routing. */}
			<Router basename='app'>
				<Switch>
					<Route path='/' component={Main} exact />
					<Route path='/table' component={Table} />
					<Route path='/thankyou' component={Thankyou} />
					<Route path='/Review' component={Review} />
					<Route path='/test' component={Test} />
				</Switch>
			</Router>
		</>
	)
}

export default App
