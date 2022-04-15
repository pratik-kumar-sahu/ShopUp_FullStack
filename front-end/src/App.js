import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/styles/app.scss';
import { Sidebar, RouteContainer } from './components/layout';

const App = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<main className='main-body flex-row'>
			<Router>
				<Sidebar showSidebar={showSidebar} />
				<RouteContainer handleSidebar={{ showSidebar, setShowSidebar }} />
			</Router>
		</main>
	);
};

export default App;
