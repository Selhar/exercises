import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
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

const muiTheme = getMuiTheme({ userAgent: false });

const nova_conta = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div style={style}>
			<form>
				<TextField hintText="E-mail" />
				<br />
				<TextField hintText="Senha" />
				<br />
				<TextField hintText="Repetir senha" />
				<br />
				<RaisedButton style={individualButtonStyle} label="Limpar" secondary={true} />
				<RaisedButton style={individualButtonStyle} label="Confirmar" primary={true} />
			</form>
		</div>

	</MuiThemeProvider>
);

export default nova_conta;