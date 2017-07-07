import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Layout from '../components/Layout';

const original_state = {
			email: "",
			emailError: "",
			senha_1: "",
			senha_1Error: "",
			senha_2: "",
			senha_2Error: "",
};

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

export default class Nova_conta extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			original_state
		};

		this.validaInput = this.validaInput.bind(this);
	}

	validaInput() {
		if(this.state.email == ""){
			this.setState({emailError: mensagem_erro});
		}else{
			this.setState({emailError: ""});
		}
		if(this.state.senha_1 == ""){
			this.setState({senha_1Error: mensagem_erro});
		}else{
			this.setState({senha_1Error: ""});
		}
		if(this.state.senha_2 == ""){
			this.setState({senha_2Error: mensagem_erro});
		}else{
			this.setState({senha_2Error: ""});
		}
	}

	gerenciaInput(evento) {
		const name = evento.target.name;
		const value = evento.target.value;
		this.setState({[name]: value});
	}

	render() {
		return(
			<Layout titulo="Nova conta" descricao="Criação de nova conta">
				<div style={style}>
					<form>
						<TextField 
							onChange={(evento) => this.gerenciaInput(evento)}
							hintText="E-mail"
							type="email"
							name="email"
							floatingLabelText="E-mail"
							value={this.state.email}
							errorText={this.state.erroLogin}
						/>
						<br />
						<TextField 
							onChange={(evento) => this.gerenciaInput(evento)}
							hintText="Senha" 
							name="senha_1"
							floatingLabelText="Senha"
							type="password"
							value={this.state.senha_1}
							errorText={this.state.senha_1Error}
						/>
						<br />
						<TextField 
							onChange={(evento) => this.gerenciaInput(evento)}
							hintText="Repetir senha" 
							name="senha_2"
							floatingLabelText="Repetir senha"
							type="password"
							value={this.state.senha_2}
							errorText={this.state.senha_2Error}
						/>
						<br />
						<RaisedButton 
							style={individualButtonStyle} 
							label="Limpar" 
							secondary={true} 
						/>
						<RaisedButton 
							style={individualButtonStyle} 
							label="Confirmar" 
							onClick={this.validaInput}
							primary={true} 
						/>
					</form>
				</div>
			</Layout>
	)}
}