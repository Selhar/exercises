import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link'
import paths from '../utils/paths';

const mensagem_erro = "Este campo é obrigatório";

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

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			login: "",
			senha: "",
			erroSenha: "",
			erroLogin: "",
		};

		this.validaInput = this.validaInput.bind(this);
	}
	
	validaInput() {
		if(this.state.login == ""){
			this.setState({erroLogin: mensagem_erro});
		}else{
			this.setState({erroLogin: ""});
		}
		if(this.state.senha == ""){
			this.setState({erroSenha: mensagem_erro});
		}else{
			this.setState({erroSenha: ""});
		}
	}

	gerenciaInput(evento) {
		const name = evento.target.name;
		const value = evento.target.value;
		this.setState({[name]: value});
	}

  render() {
		return (
			<div style={style}>
				<form>
					<TextField 
						onChange={(evento) => this.gerenciaInput(evento)}
						name="login"
						floatingLabelText="Login"
						hintText="Login" 
						value={this.state.login}
						errorText={this.state.erroLogin}
						/>
					<br />
					<TextField 
						onChange={(evento) => this.gerenciaInput(evento)}
						name="senha"
						floatingLabelText="Senha"
						hintText="Senha" 
						type="password" 
						value={this.state.senha}
						errorText={this.state.erroSenha} />
					<br />
					<div style={buttonStyle}>
						<Link href={paths['nova_conta'][0]}>
							<RaisedButton 
								style={individualButtonStyle} 
								label="Nova conta"
								secondary={true} />
						</Link>
						<RaisedButton 
							style={individualButtonStyle} 
							label="Login" 
							onClick={this.validaInput}
							primary={true} />
					</div>
				</form>
			</div>
	);
	}
}