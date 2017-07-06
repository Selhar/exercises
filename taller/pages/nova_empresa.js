import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link'
import paths from '../utils/paths';
import Layout from '../components/Layout';

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

const Login = () => (
    <Layout titulo="Nova empresa" descricao="Cadastro de empresa">

	<div style={style.global}>
		<form>
			<TextField hintText="Nome fantasia" />
			<br />
			<TextField hintText="CNPJ" />
			<br />
			<div style={style.form}>
				<RaisedButton label="Cadastrar" primary={true} />
			</div>
		</form>
	</div> 
    </Layout>
);

export default Login;