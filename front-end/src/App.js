import { BrowserRouter as Router } from 'react-router-dom';

import './assets/styles/app.scss';
import { Sidebar, RouteContainer } from './components/container';

const App = () => {
	return (
		<main className='main-body flex-row'>
			<Router>
				<Sidebar />
				<RouteContainer />
			</Router>
		</main>
	);
};

export default App;
