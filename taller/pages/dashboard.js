import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Layout from '../components/Layout';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh'
};

const Dashboard = () => (
	<Layout titulo="Dashboard">
		<div style={style}>
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
		</div>
	</Layout>
);

export default Dashboard;