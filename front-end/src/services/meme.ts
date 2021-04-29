import axios from 'axios'

import { ENDPOINT } from './index'

export const getTemplates = async () => {
    const response = await axios.get(`${ENDPOINT}/templates`)
    console.log(response)
    return response.data
}

export const getTemplateById = async (id: number) => {
    const response = await axios.get(`${ENDPOINT}/templates?id=${id}`)
    return response.data
}