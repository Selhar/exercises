import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link'
import paths from '../utils/paths';
import Layout from '../components/Layout';

const mensagem_erro = "Este campo é obrigatório";

const style = {
    global: {
	    margin: '15px',
	    position: 'relative',
	    minHeight: '55vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
    },
    form: {
        width: '300px',
    }
};

export default class Nova_empresa extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nome_fantasia: "",
			nome_fantasiaErro: "",
			cnpj: "",
			cnpjErro: ""
		}

		this.validaInput = this.validaInput.bind(this);
	}

	validaInput() {
		if(this.state.nome_fantasia == ""){
			this.setState({nome_fantasiaErro: mensagem_erro});
		}else{
			this.setState({nome_fantasiaErro: ""});
		}
		if(this.state.cnpj == ""){
			this.setState({cnpjErro: mensagem_erro});
		}else{
			this.setState({cnpjErro: ""});
		}
	}

	gerenciaInput(evento) {
		const name = evento.target.name;
		const value = evento.target.value;
		this.setState({[name]: value});
	}

	render() {
		return (
			<Layout titulo="Nova empresa" descricao="Cadastro de empresa">
				<div style={style.global}>
					<form>
						<TextField 
							hintText="Nome fantasia" 
							onChange={(evento) => this.gerenciaInput(evento)}
							name="nome_fantasia"
							floatingLabelText="Nome fantasia"
							value={this.state.nome_fantasia}
							errorText={this.state.nome_fantasiaErro}
						/>
						<br />
						<TextField 
							hintText="cnpj" 
							onChange={(evento) => this.gerenciaInput(evento)}
							name="cnpj"
							floatingLabelText="CNPJ"
							value={this.state.cnpj}
							errorText={this.state.cnpjErro}
						/>
						<br />
						<div style={style.form}>
							<RaisedButton 
								label="Cadastrar" 
								primary={true}
								onClick={this.validaInput}
						/>
						</div>
					</form>
				</div> 
			</Layout>
		);
	}
}