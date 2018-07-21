import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';

import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Footer from './components/Footer.jsx';

export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<BrowserRouter>
				<div className="main">
					<Header />
						<Switch>
							<Route path="/" component={Home} />
						</Switch>
					<Footer />
				</div>
			</BrowserRouter>
			)
	}
}