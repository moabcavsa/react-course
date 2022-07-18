import axios from "axios"

export const getCompanies = () => 
{
    return axios.get('https://retoolapi.dev/m0jWJ7/misc')
    .then(data => 
        {
            return data;
        })
    .catch(err => {
        return err;
    })
}


export const getFrameworks = () =>
{
    return axios.get('https://retoolapi.dev/91aQiK/apigen')
    .then(data =>
        {
            return data;
        })
    .catch(err => {
        return err;
    })
}

export const getProjects = () =>
{
    return axios.get('https://retoolapi.dev/y2cw4Y/projects')
    .then(data =>
        {
            return data;
        })
    .catch(err => {
        return err;
    })
}