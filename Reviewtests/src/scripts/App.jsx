import React from 'react'
import '../styles/App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main.jsx'
import Main7 from './Main7.jsx'
import Thankyou from './Thankyou.jsx'
import Table from './Table.jsx'
import Review from './Review.jsx'
import Test from './Test'
import AssignT from './AssignT'
const App = () => {
	return (
		<>
			{/* /React won't apply on deploy builds, Needs to be added as a basename for routing. */}
			<Router basename='app'>
				<Switch>
					
					<Route path='/' component={Main} exact />
					<Route path='/lec7' component={Main7} />
					<Route path='/table' component={Table} />
					<Route path='/thankyou' component={Thankyou} />
					<Route path='/Review' component={Review} />
					<Route path='/test' component={Test} />
					<Route path='/assign_t' component={AssignT} />
				</Switch>
			</Router>
		</>
	)
}

export default App
