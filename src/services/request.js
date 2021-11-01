const url = 'http://localhost:5001/categories'

export const getData = () => {
    return fetch(url)
        .then(res => res.json())
}

export const deleteData = (id) => {
    return fetch(`${url}/${id}`, { method: 'DELETE' })
}

export const addData = (data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const editData = (id, data) => {
    return fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json())

}