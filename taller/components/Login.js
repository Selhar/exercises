import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link'

const style = {
	
};

const buttonStyle = {
	width: '100%',
};

const individualButtonStyle = {
	width: '50%',
	fontSize: '1vw'
};

const Header = {
	position: 'absolute',
	top: '25px',
	
}

const Login = () => (
	<div style={style}>
		<form>
			<TextField hintText="Login" />
			<br />
			<TextField hintText="Senha" />
			<br />
			<div style={buttonStyle}>
				<Link href="/nova_conta">
					<RaisedButton style={individualButtonStyle} label="Nova conta" secondary={true} />
				</Link>
				<RaisedButton style={individualButtonStyle} label="Login" primary={true} />
			</div>
		</form>
	</div>
);

export default Login;