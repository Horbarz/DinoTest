import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_ID: 'FETCH_ID',
    FETCH_NAME: 'FETCH_NAME',
    FETCH_CODE: 'FETCH_CODE'
}

export const fetchAll = (category) => dispatch => {
    api.locationsApi(category).fetchAll()
        .then(response => {
            console.log(response)
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchById = (id) => dispatch => {
    api.locationsApi().fetchById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ID,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchByName = (nameInfo) => dispatch => {
    api.locationsApi().fetchByName(nameInfo)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_NAME,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchByCode = (codeInfo) => dispatch => {
    api.locationsApi().fetchByCode(codeInfo)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_CODE,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    api.locationsApi().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.locationsApi().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.locationsApi().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}