import Category from './components/Category/Category';
import MenuItem from './components/MenuItem/MenuItem';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header/Header';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Container fluid>
			<Row auto>
				<Col xs="auto"><Header /></Col>
				<Col>
					<Switch>
						<Route exact path="/" ><MenuItem name="Dashboard" /></Route>
						<Route path="/posts"><MenuItem name="Posts" /></Route>
						<Route path="/categories" component={Category} />
						<Route path="/pages"><MenuItem name="Pages" /></Route>
						<Route path="/settings"><MenuItem name="Settings" /></Route>
					</Switch>
				</Col>

			</Row>



		</Container>
	);
}

export default App;
