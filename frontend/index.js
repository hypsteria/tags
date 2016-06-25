import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import tagzApp from './reducers'
import App from './components/App';
import { ClotheList } from './components'

let store = createStore(tagzApp)

render (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ClotheList} />
				<Route path="home" component={ClotheList} />
				<Route path="*"    component={ClotheList} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);