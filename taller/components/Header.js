import Link from 'next/link'

const style = {
	textAlign: 'center',
	fontFamily: '"Alegreya", "aleo", Georgia, "Times New Roman", Times, Georgia, "DejaVu Serif", serif',
	fontStyle: 'italic',
	fontWeight: 'bold',
	textTransform: 'lowercase',
	letterSpacing: '-0.01em',
	fontSize: '2.5em'
}

const Header = () => (
	<div>
		<h1 style={style}>Taller</h1>
	</div>
)

export default Header