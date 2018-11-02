import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';
import { Image, Item, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import clientShape from '../../shapes/client';
import { getCurrentViewableClient } from '../../selectors/clients';

const enhance = compose(
    connect(store => ({
        client: getCurrentViewableClient(store),
    })),
    branch(({ client }) => typeof client === 'undefined', renderNothing),
);

const ClientsDetail = ({ client: { id, name, email } }) => (
    <Item.Group >
    <Item className="ClientDetail">
        <Image avatar src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Divider hidden />

        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <span>{email}</span>
                <span></span>
            </Item.Meta>
            <Item.Description></Item.Description>
        </Item.Content>
    </Item>
    </Item.Group>


    // {/*<dl className="ClientDetail">*/}
    //     {/*<dt>Client ID:</dt>*/}
    //     {/*<dd>{id}</dd>*/}
    //     {/*<dt>Name:</dt>*/}
    //     {/*<dd>{name}</dd>*/}
    // {/*</dl>*/}
);

ClientsDetail.propTypes = {
    client: clientShape.isRequired,
};

export default enhance(ClientsDetail);