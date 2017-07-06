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
	<Layout titulo="Novo pedido">
			<div style={style.novoPedido}>
				<SelectField floatingLabelText="Selecione uma empresa">
					<MenuItem value={1} primaryText="Never" />
					<MenuItem value={2} primaryText="Every Night" />
					<MenuItem value={3} primaryText="Weeknights" />
					<MenuItem value={4} primaryText="Weekends" />
					<MenuItem value={5} primaryText="Weekly" />
				</SelectField>
				<SelectField floatingLabelText="Selecione um produto">
					<MenuItem value={1} primaryText="Never" />
					<MenuItem value={2} primaryText="Every Night" />
					<MenuItem value={3} primaryText="Weeknights" />
					<MenuItem value={4} primaryText="Weekends" />
					<MenuItem value={5} primaryText="Weekly" />
				</SelectField>
				<TextField hintText="Qtd"/>
    			<RaisedButton label="Adicionar" primary={true} style={style} />
			</div>
			<div style={style.tabela}>
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false} >
						<TableRow>
							<TableHeaderColumn>Nome fantasia</TableHeaderColumn>
							<TableHeaderColumn>CNPJ</TableHeaderColumn>
							<TableHeaderColumn>Qtd. Pedidos</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						<TableRow>
							<TableRowColumn>Drupatec soluções</TableRowColumn>
							<TableRowColumn>28.354.669/0001-09</TableRowColumn>
							<TableRowColumn>1</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>BRFoods</TableRowColumn>
							<TableRowColumn>35.577.109/0001-70</TableRowColumn>
							<TableRowColumn>4</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>PasquePag</TableRowColumn>
							<TableRowColumn>34.763.818/0001-88</TableRowColumn>
							<TableRowColumn>0</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>ClubSocial</TableRowColumn>
							<TableRowColumn>21.211.526/0001-90</TableRowColumn>
							<TableRowColumn>2</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Bamerindus</TableRowColumn>
							<TableRowColumn>87.487.918/0001-95</TableRowColumn>
							<TableRowColumn>1</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
				<RaisedButton label="Fechar pedido" primary={true} style={style} />
		</div>
	</Layout>
);

export default Dashboard;