import Link from 'next/link'
import Head from 'next/head';

const style = {
	textAlign: 'center',
	fontFamily: '"Alegreya", serif',
	fontStyle: 'italic',
	fontWeight: 'bold',
	textTransform: 'lowercase',
	letterSpacing: '-0.01em',
	fontSize: '2.5em'
}

const Header = () => (
	<div>
		<Head>
			<title>Taller teste técnico</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" />
		</Head>
		<h1 style={style}>Taller</h1>
	</div>
)

export default Header