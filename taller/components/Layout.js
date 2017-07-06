import React from 'react';
import Link from 'next/link'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import paths from '../utils/paths';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme({ userAgent: false })

const style = {
	margin: '15px',
	position: 'relative',
	minHeight: '95vh',
}

export default class Layout extends React.Component {
	state = {
		open: false,
		drawerWidth: '0'
	};
	
	componentWillMount() {
    	try {
			injectTapEventPlugin();
		} catch(error){
			console.log(error)
		};
  	}

	toggle = () => {
		this.setState((previousState, props) => {
			return {
				open: !previousState.open,
				drawerWidth: previousState.open ? '0' : '260px'
			}
		});
	}

  render() {
		const buttonStyle = {
			marginLeft: this.state.drawerWidth, 
			position: 'absolute', 
			top: '0'
		}

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
				<div style={style}>
					<Header titulo={this.props.titulo}/>
					<FloatingActionButton 
						label="Toggle Drawer" 
						onTouchTap={this.toggle} 
						style={buttonStyle}
					>
						<MenuIcon />
					</FloatingActionButton>
					<Drawer open={this.state.open} style={{width: this.state.drawerWidth}}>
						<Link href={paths.home}>
							<MenuItem>Login</MenuItem>
						</Link>
						<Link href={paths.nova_conta}>
							<MenuItem>Nova conta</MenuItem>
						</Link>
						<Link href={paths.dashboard}>
							<MenuItem>Dashboard</MenuItem>
						</Link>
						<Link href={paths.novo_pedido}>
							<MenuItem>Novo Pedido</MenuItem>
						</Link>
					</Drawer>
					{this.props.children}
				</div>
      </MuiThemeProvider>
    );
  }
}