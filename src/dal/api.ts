import axios from 'axios';

export const instance = axios.create({
    baseURL:'https://api.github.com/'
})

export const getUsers = (perPage:number) => {
    return instance.get(`users?per_page=${perPage}`)
}