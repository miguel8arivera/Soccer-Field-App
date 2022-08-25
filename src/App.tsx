import './App.css';
import logo from './img/logo.png';
import { Props } from './assets/interface';
import MainPage from './components/MainPage';

function App({ title }: Props) {
	return (
		<div className='bg-dark text-white' style={{ height: '100%' }}>
			<nav className='navbar navbar-dark bg-primary'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						<img src={logo} alt='logo futbol' style={{ width: '4rem' }} />
						{title && <h4 className='ml-2 text-white'>{title}</h4>}
					</a>
				</div>
			</nav>
			<main className='container p-4'>
				<div className='row'>
					<MainPage />
				</div>
			</main>
		</div>
	);
}

export default App;
