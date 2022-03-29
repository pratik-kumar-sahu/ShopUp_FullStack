import './assets/styles/app.scss';
import { Sidebar, RouteContainer } from './components/container';

const App = () => {
	return (
		<main className='main-body flex-row'>
			<Sidebar />
			<RouteContainer />
		</main>
	);
};

export default App;
