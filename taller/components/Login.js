import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
};

const buttonStyle = {
	width: '100%',
};

const individualButtonStyle = {
	width: '50%',
	fontSize: '1vw'
};

const Login = () => (
	<div style={style}>
		<TextField hintText="Login" />
		<br />
		<TextField hintText="Senha" />
		<br />
		<div style={buttonStyle}>
    	<RaisedButton style={individualButtonStyle} label="Nova conta" secondary={true} />
			<RaisedButton style={individualButtonStyle} label="Login" primary={true} />
		</div>
	</div>
);

export default Login;