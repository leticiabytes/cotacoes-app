import React, { useState, useCallback } from 'react';

import logo from '../../assets/logo.png';
import './styles.css';
import { useAuth } from '../../hooks/auth';

const Login = () => {
	const { signIn } = useAuth();

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const user = { name, email, password };
		await signIn(user);
	};

	return (
		<div className="container-login">
			<aside className="logo">
				<img src={logo} alt="Logo" />
				<h1 className="title-login">Cotações App</h1>
				<p className="description-login">cotações em tempo real</p>
			</aside>
			<div className="form-login">
				<div className="mini-logo-login">
					<img src={logo} alt="Logo" />
					<h2>Cotações App</h2>
					<p>cria sua conta</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="container-input-group">
						<input
							type="text"
							value={name}
							placeholder="Nome"
							onChange={({ target }) => setName(target.value)}
							required
						/>
						<input
							type="email"
							value={email}
							placeholder="E-mail"
							onChange={({ target }) => setEmail(target.value)}
							required
						/>
						<input
							type="password"
							value={password}
							placeholder="Senha"
							onChange={({ target }) => setPassword(target.value)}
							required
						/>
					</div>
					<button type="submit" className="btn-login">
						Acessar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
