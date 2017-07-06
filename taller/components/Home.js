import Header from '../components/Header';
import Login from '../components/Login';
import Head from 'next/head';

const style = {  
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
};

const Home = () => (
	<div style={style}>
		<Head>
			<title>Taller teste técnico</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
		</Head>

		{/*<Header />*/}
		<Login />
	</div>
);

export default Home;