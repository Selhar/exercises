import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Layout from '../components/Layout';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
	tabela: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	novoPedido: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
};

const Dashboard = () => (
	<Layout titulo="Meus pedidos">
			<div style={style.novoPedido}>
				<TextField hintText="CNPJ"/>
				<TextField hintText="Pedido"/>
    		<RaisedButton label="Filtrar" primary={true} style={style} />
			</div>
			<div style={style.tabela}>
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false} >
						<TableRow>
							<TableHeaderColumn>Código do pedido</TableHeaderColumn>
							<TableHeaderColumn>Itens do pedido</TableHeaderColumn>
							<TableHeaderColumn>Ações</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						<TableRow>
							<TableRowColumn>20</TableRowColumn>
							<TableRowColumn>PLACEHOLDER</TableRowColumn>
							<TableRowColumn>PLACEHOLDER</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
		</div>
	</Layout>
);

export default Dashboard;