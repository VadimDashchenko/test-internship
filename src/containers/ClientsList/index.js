import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as clientsActions from '../../actions/clients';
import { getFilteredClientsList, getCurrentViewableClientID } from '../../selectors/clients';
import clientShape from '../../shapes/client';

import './styles.scss';

class ClientsList extends Component {
    static propTypes = {
        setEditableClientById: PropTypes.func.isRequired,
        setViewableClientById: PropTypes.func.isRequired,
        clientsList: PropTypes.arrayOf(clientShape).isRequired,
        currentViewableClientID: PropTypes.string,
    };

    static defaultProps = {
        currentViewableClientID: null,
    };
    // componentDidMount() {
    //     fetch('../../middlewares/clients.json')
    //         .then(result => result.json())
    //         .then(data => {
    //             let dataResult = data.result.map((res) => {
    //                 return(
    //                     <div key={res.result}></div>
    //                 )
    //             })
    //             this.setState({data:dataResult});
    //         })
    // }

    handleEditClick = event => {
        event.stopPropagation();

        const { target } = event;
        const { setEditableClientById } = this.props;

        setEditableClientById(target.dataset.clientId);
    };

    handleShowClick = ({ target }) => {
        const { setViewableClientById } = this.props;

        setViewableClientById(target.dataset.clientId);
    };

    render() {
        const { clientsList, currentViewableClientID } = this.props;

        return (
            <ul className="ClientsList">
                {clientsList.map(({  id,picture, general }) => {
                    const listItemClassName = classNames('ClientsList-item', {
                        isActive: id === currentViewableClientID,
                    });

                    return (
                        <li
                            className={listItemClassName}
                            key={id}
                            data-client-id={id}
                            onClick={this.handleShowClick}
                        >
                            <strong>{general}</strong>
                            <img src={picture} alt=""/>
                            <button type="button" data-client-id={id} onClick={this.handleEditClick}>
                                Edit
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    clientsList: getFilteredClientsList(state),
    currentViewableClientID: getCurrentViewableClientID(state),
});

export default connect(
    mapStateToProps,
    clientsActions,
)(ClientsList);