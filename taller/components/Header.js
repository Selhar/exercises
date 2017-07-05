import Link from 'next/link'
import paths from '../utils/paths';

const style = {
	marginRight: 15
}

const Header = () => (
	<div>
		<Link href={paths.home}>
			<a style={style}>Login</a>
			</Link>
		<Link href={paths.nova_conta}>
			<a style={style}>Nova conta</a>
		</Link>
	</div>
)

export default Header