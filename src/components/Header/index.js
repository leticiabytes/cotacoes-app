import React from 'react';
import { MdExitToApp } from 'react-icons/md';

import './styles.css';
import logo from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

const Header = ({ name }) => {
	const { user, signOut } = useAuth();

	return (
		<div className="header">
			<div className="logo">
				<img src={logo} alt="the App" />
				<div className="vl" />
				<p className="text-header">Cotações em tempo real</p>
			</div>
			<div className="header-log">
				<div className="name-header">Olá, {user.name}</div>
				<button type="button" onClick={() => signOut()}>
					<MdExitToApp color="#D34316" size={24} />
				</button>
			</div>
		</div>
	);
};

export default Header;
