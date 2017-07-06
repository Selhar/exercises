import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {  
};

const Login = () => (
	<div style={style}>
		<TextField hintText="Login" />
		<br />
		<TextField hintText="Password" />
		<br />
    <RaisedButton label="Primary" primary={true} />
    <RaisedButton label="Secondary" secondary={true} />
	</div>
);

export default Login;