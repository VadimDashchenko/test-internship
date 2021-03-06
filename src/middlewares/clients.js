import { CLIENTS_FETCH_LIST, fetchClientsListSuccess, fetchClientsListError } from "../actions/clients";

export default store => next => action => {
    next(action);

    if (action.type === CLIENTS_FETCH_LIST) {
        fetch('http://www.json-generator.com/api/json/get/cqprXbIxBu?indent=2')
            .then((result) => result.json())
            .then(clientsList => {
                next(fetchClientsListSuccess(clientsList))
            })
            .catch(error => {
                next(fetchClientsListError(error));
            })
    }
}