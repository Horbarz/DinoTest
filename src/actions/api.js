import axios from "axios"

const baseUrl = "https:/api.photodino.com/locations/"




export default {
    locationsApi(category) {
        const url = baseUrl + category + "/";
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            fetchByName: nameInfo => axios.get(url,nameInfo),
            fetchByCode: codeInfo => axios.get(url,codeInfo),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id +"/", updateRecord),
            delete: id => axios.delete(url + id + "/")
        }
    }    
}

//export default locations;
