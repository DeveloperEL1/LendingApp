import axios from 'axios'
const BASE_URI = 'http://localhost:5000'
export const signUpUserInfo = async (name, email, password) => {
    const body = {
        name,
        email,
        password
    }
    try {
        return (await axios.post(`${BASE_URI}/api/users/signup`, body)).data
    } catch (error) {
        console.log(error)
    }
}

export const signInUserInfo = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URI}/api/users/signin`, { email, password })
        return response.data
    } catch (error) {
        throw error
    }

}

export const getAllUsers = async () => {
    try {
        return (await axios.get(`${BASE_URI}/api/users/`)).data
    } catch (error) {
        console.log(error)
    }
}

export const updateUserInfo = async (id, body) => {
    try {
        await axios.put(`${BASE_URI}/api/users/${id}`, body)

    } catch (error) {
        console.log(error)
    }
}