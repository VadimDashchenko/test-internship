import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';

import clientShape from '../../shapes/client';
import { getCurrentViewableClient } from '../../selectors/clients';

const enhance = compose(
    connect(store => ({
        client: getCurrentViewableClient(store),
    })),
    branch(({ client }) => typeof client === 'undefined', renderNothing),
);

const ClientsDetail = ({ client: { id, picture } }) => (
    <dl className="ClientDetail">
        <dt>Client ID:</dt>
        <dd>{id}</dd>
        <dt>Name:</dt>
        <dd>{picture}</dd>
    </dl>
);

ClientsDetail.propTypes = {
    client: clientShape.isRequired,
};

export default enhance(ClientsDetail);