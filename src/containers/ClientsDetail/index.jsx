import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';
import { Image, Card, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import clientShape from '../../shapes/client';
import { getCurrentViewableClient } from '../../selectors/clients';

const enhance = compose(
    connect(store => ({
        client: getCurrentViewableClient(store),
    })),
    branch(({ client }) => typeof client === 'undefined', renderNothing),
);

const ClientsDetail = ({ client: { id, name,company, email, address, phone } }) => (
    <List>
        <List.Content className="ClientDetail">
            <Image floated='left' size='medium' src='https://react.semantic-ui.com/images/avatar/large/helen.jpg' />
            <Card.Header><h1><strong>{name}</strong></h1></Card.Header>
            <Card.Description><h3>{company}</h3></Card.Description>
            <Card.Description>{address}</Card.Description>
            <Card.Description>{email}</Card.Description>
            <Card.Description>{phone}</Card.Description>
        </List.Content>
    </List>



    // <Item.Group >
    // <Item className="ClientDetail">
    //     <img  src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" alt=""/>
    //
    //     <Item.Content>
    //         <Item.Header>{name}</Item.Header>
    //         <Item.Meta>
    //             <span>{email}</span>
    //         </Item.Meta>
    //         <Item.Description></Item.Description>
    //     </Item.Content>
    // </Item>
    // </Item.Group>



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