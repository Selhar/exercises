import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Layout from '../components/Layout';

const style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

const buttonStyle = {
	width: '100%',
};

const individualButtonStyle = {
	width: '50%',
};

const nova_conta = () => (
	<Layout>
		<div style={style}>
			<form>
				<TextField hintText="E-mail" />
				<br />
				<TextField hintText="Senha" />
				<br />
				<TextField hintText="Repetir senha" />
				<br />
				<RaisedButton 
					style={individualButtonStyle} 
					label="Limpar" 
					secondary={true} 
				/>
				<RaisedButton 
					style={individualButtonStyle} 
					label="Confirmar" 
					primary={true} 
				/>
			</form>
		</div>
	</Layout>
);

export default nova_conta;