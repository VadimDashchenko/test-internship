import React from 'react';
import { connect } from 'react-redux';

import * as clientsActions from '../../actions/clients';

const ClientFrom = ({handleSubmit}) => (
    <form action="/" className="ClientForm" onSubmit={handleSubmit}>
        <fieldset className="ClientFrom-fieldset">
            <div className="ClientFrom-field">
                <label htmlFor="clientName">Name Client:</label>
                <input id="clientName"
                       type="text"
                       name="name" />
            </div>
            <button type="submit">Submit</button>
        </fieldset>
    </form>
);



const mapDispatchToProps = dispatch => ({
        handleSubmit: event => {
            event.preventDefault();
            const name = event.target.name.value;

            dispatch(clientsActions.addClient({
                name,
            }),
            );
        }
});

export default connect(
    null,
    mapDispatchToProps,
)(ClientFrom);