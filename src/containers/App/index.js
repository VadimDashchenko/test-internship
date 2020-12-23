import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import * as clientsActions from '../../actions/clients';

//import ClientForm from '../ClientForm';
import ClientsList from '../ClientsList';
import ClientsDetail from '../ClientsDetail';
import ClientsSearchContainer from '../ClientsSearchContainer';

import './styles.scss';

const enhance = compose(
    connect(
        null,
        clientsActions,
    ),
    lifecycle({
        componentDidMount() {
            const { fetchClientsList } = this.props;
            fetchClientsList();
        },
    }),
);

const App = () => (
    <div className="App">
        <div className="App-content">
            <div className="App-clientsList">
                <h2>Testing git commands</h2>
                <ClientsSearchContainer />
                <ClientsList />
            </div>
            <div className="App-clientsDetail">
                <ClientsDetail />
            </div>
        </div>
    </div>
);

export default enhance(App);