import axios from 'axios'

import { ENDPOINT } from './index'

export const getTemplates = async () => {
    const response = await axios.get(`${ENDPOINT}/templates`)
    return response.data
}

export const getTemplateById = async (id: number) => {
    const response = await axios.get(`${ENDPOINT}/templates?id=${id}`)
    return response.data
}

export const getGeneratedContent = async (id: number) => {
    const response = await axios.get(`${ENDPOINT}/generation?id=${id}`)
    return response.data
}