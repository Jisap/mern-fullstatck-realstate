import axios from 'axios'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: "http://localhost:8000/api" // Backend
})

export const getAllProperties = async() => {

  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000
    })

    if(response.status === 400 || response.status === 500){
      throw response.data
    }

    return response.data;

  } catch (error) {
    toast.error("something went wrong")
    throw error
  }
};

export const getProperty = async(id) => {

  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000
    })

    if (response.status === 400 || response.status === 500) {
      throw response.data
    }

    return response.data;

  } catch (error) {
    toast.error("something went wrong")
    throw error
  }
}

export const createUser = async(email, token) => {    // Esta fn apunta a la route del backend para la creación de un usuario en bd
  try {
    await api.post(`/user/register`, {email}, {       // Le envía el email
      headers: {
        Authorization: `Bearer ${token}`              // y el token de autenticación
      }
    })
  } catch (error) {
    toast.error("Something went wrong, Please try again")
    throw error
  }

}