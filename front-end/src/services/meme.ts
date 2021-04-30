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

export const getGeneratedContent = async (seed: string, id: number) => {
    const response = await axios.get(`${ENDPOINT}/generation?id=${id}&seed=${seed}`)
    return response.data
}