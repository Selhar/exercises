import Link from 'next/link'
import Head from 'next/head';

const styleTaller = {
	textAlign: 'center',
	fontFamily: '"Alegreya", serif',
	fontStyle: 'italic',
	fontWeight: 'bold',
	textTransform: 'lowercase',
	letterSpacing: '-0.01em',
	fontSize: '2.5em'
}

const styleHeader = {
	textAlign: 'center',
	fontSize: '2.5em',
	fontWeight: 'bold',
}

const Header = (props) => (
	<div>
		<Head>
			<title>{props.titulo || ''}</title>
			<meta name="description" content={props.descricao} />
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" />
			<link rel="icon" href="/static/favicon.png" />
		</Head>
		<h1 style={
			props.titulo.toString().toLowerCase() == 'taller' 
			? styleTaller 
			: styleHeader
		}>
			{props.titulo}
		</h1>
	</div>
)

export default Header