import React from 'react';
import Link from 'next/link'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import paths from '../utils/paths';
import Header from './Header';

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

	toggle = () => {
		this.setState((previousState, props) => {
			return {
				open: !previousState.open,
				drawerWidth: previousState.open ? '0' : '260px'
			}
		});
	}

  render() {
    return (
      <div style={style}>
				<Header />
				<FloatingActionButton label="Toggle Drawer" 
															onTouchTap={this.toggle} 
															style={{
																marginLeft: this.state.drawerWidth, 
																position: 'absolute', 
																top: '0'
				}}>
					<MenuIcon />
				</FloatingActionButton>
				<Drawer open={this.state.open} style={{width: this.state.drawerWidth}}>
          <Link href={paths.home}>
						<MenuItem>Login</MenuItem>
					</Link>
          <Link href={paths.nova_conta}>
						<MenuItem>Nova conta</MenuItem>
					</Link>
        </Drawer>
				{this.props.children}
      </div>
    );
  }
}