import React, { useState, useEffect } from 'react';

import './styles.css';
import Header from '../../components/Header';

import api from '../../services/api';

const Dashboard = () => {
	const [results, setResults] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const [filteredResults, setFilteredResults] = useState([]);

	useEffect(() => {
		async function loadCurrencies() {
			await api.get('').then(res => {
				setResults(res.data.results.stocks);
			});
		}
		loadCurrencies();
	}, []);

	return (
		<div className="container-dashboard">
			<Header />
			<div className="content-dashboard">
				<div className="head">
					<div className="container-search-dashboard">
						<input type="text" className="input-search-dashboard" />
						<button type="button" className="button-search-dashboard">
							Pesquisar
						</button>
					</div>
					<p className="title-dashboard">Em destaque</p>
				</div>
				<div className="list-dashboard">
					<div className="list-header">
						<p>Nome</p>
						<p>Localização</p>
						<p>Pontos</p>
						<p>Variação</p>
					</div>
					<hr className="list-divider" />
					<div className="list-items">
						{results &&
							Object.keys(results).map(item => (
								<React.Fragment key={item}>
									<div className="list-item">
										<p
											className={`title-price ${
												results[item].variation > 0 ? 'green' : 'red'
											}`}
										>
											{item}
										</p>
										<p>{results[item].location}</p>
										<p>{results[item].points}</p>
										<p
											className={`title-variation ${
												results[item].variation > 0 ? 'green' : 'red'
											}`}
										>
											{results[item].variation}
										</p>
									</div>
									<hr className="list-divider" />
								</React.Fragment>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
