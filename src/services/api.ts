/* eslint-disable */

import axios from "axios"

export const urlFiles = 'https://pokeapi.co/api/v2/'

const api = axios.create({
    baseURL: urlFiles,
})

export default api;