import Header from '../components/Header';
import Login from '../components/Login';

const style = {  
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

const Home = () => (
	<div style={style}>
		<Login />
	</div>
);

export default Home;