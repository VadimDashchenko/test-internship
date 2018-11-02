import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
                {clientsList.map(({  id, company, name }) => {
                    const listItemClassName = classNames('ClientsList-item', {
                        isActive: id === currentViewableClientID,
                    });

                    return (
                        <li >
                            <List celled >
                                <List.Item classname={listItemClassName}
                                           key={id}
                                           data-client-id={id}
                                           onClick={this.handleShowClick}>
                                    <Image size="mini" src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                    <List.Content>
                                        <List.Header><strong>{name}</strong></List.Header>
                                        {company}
                                    </List.Content>
                                </List.Item>
                            </List>
                        </li>


                        // <li
                        //     className={listItemClassName}
                        //     key={id}
                        //     data-client-id={id}
                        //     onClick={this.handleShowClick}
                        // >
                        //     <strong>{name}</strong>
                        //     <img src={picture} alt=""/>
                        //     <button type="button" data-client-id={id} onClick={this.handleEditClick}>
                        //         Edit
                        //     </button>
                        // </li>
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


