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
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchById = (category,id) => dispatch => {
    api.locationsApi(category).fetchById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ID,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchByName = (category,nameInfo) => dispatch => {
    api.locationsApi(category).fetchByName(nameInfo)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_NAME,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchByCode = (category,codeInfo) => dispatch => {
    api.locationsApi(category).fetchByCode(codeInfo)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_CODE,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (category,data, onSuccess) => dispatch => {
    api.locationsApi(category).create(data)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (category,id, data, onSuccess) => dispatch => {
    api.locationsApi(category).update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (category,id) => dispatch => {
    api.locationsApi(category).delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
        })
        .catch(err => console.log(err))
}